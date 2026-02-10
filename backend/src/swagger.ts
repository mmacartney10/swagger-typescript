import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import deepmerge from "deepmerge";

const loadSwaggerFile = (folder: string) => {
  return YAML.load(__dirname + `/${folder}/swagger.yaml`);
};

const peopleApi = loadSwaggerFile("api/people");
// const aboutApi = loadSwaggerFile("api/about");
const typesApi = loadSwaggerFile("types");

const mergedSpec: Record<string, any> = deepmerge.all([peopleApi, typesApi], {
  arrayMerge: (destination, source) => [...destination, ...source],
});

if (!mergedSpec.tags) {
  mergedSpec.tags = [];
}

export function setupSwagger(app: express.Application) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(mergedSpec));

  app.get("/swagger.json", (request, response) => {
    response.json(mergedSpec);
  });
}

export { mergedSpec };
