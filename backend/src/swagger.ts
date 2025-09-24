import express from "express";
import swaggerUi from "swagger-ui-express";
import YAML from "yamljs";
import deepmerge from "deepmerge";

const loadSwaggerFile = (folder: string) => {
  return YAML.load(__dirname + `/${folder}/swagger.yaml`);
};

const peopleApi = loadSwaggerFile("people");
const otherApi = loadSwaggerFile("types");

const mergedSpec: Record<string, any> = deepmerge(peopleApi, otherApi);

export function setupSwagger(app: express.Application) {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(mergedSpec));
}
