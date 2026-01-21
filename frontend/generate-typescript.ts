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
  addReadonly: false,
  extractEnums: false,
  extractRequestBody: true,
  extractRequestParams: true,
  extractResponseBody: true,
  generateClient: true,
  generateRouteTypes: true,
  generateUnionEnums: false,
  httpClientType: "fetch",
  moduleNameFirstTag: true,
  name: "api-client.ts",
  output: path.resolve(process.cwd(), "./generated"),
  silent: true,
  unwrapResponseData: false,
  url: process.env.SWAGGER_DOCS_URL as string,
});
