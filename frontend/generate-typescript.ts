import "dotenv/config";
import * as path from "node:path";
import * as process from "node:process";
import * as fse from "fs-extra";
import { generateApi } from "swagger-typescript-api";
import openapiTS, { astToString } from "openapi-typescript";

const ast = await openapiTS(new URL(process.env.SWAGGER_DOCS_URL as string));
const contents = astToString(ast);

await fse.outputFile("./generated/api-types.ts", contents);

await generateApi({
  output: path.resolve(process.cwd(), "./generated"),
  name: "api-client.ts",
  generateClient: true,
  httpClientType: "fetch",
  generateRouteTypes: true,
  extractRequestBody: true,
  extractResponseBody: true,
  extractEnums: true,
  addReadonly: false,
  modular: false,
  silent: false,
  unwrapResponseData: false,
  extractRequestParams: true,
  url: process.env.SWAGGER_DOCS_URL as string,
  templates: undefined,
});
