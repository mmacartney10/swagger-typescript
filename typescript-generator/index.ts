import "dotenv/config";
import * as path from "node:path";
import * as process from "node:process";
import * as fse from "fs-extra";
import { generateApi } from "swagger-typescript-api";
import openapiTS, { astToString } from "openapi-typescript";

const ast = await openapiTS(new URL("./swagger.json", import.meta.url));
const contents = astToString(ast);

await fse.outputFile("./generated/api-types.ts", contents);

await generateApi({
  addReadonly: false,
  extractEnums: false,
  extractRequestBody: true,
  extractRequestParams: true,
  extractResponseBody: true,
  generateClient: false,
  generateRouteTypes: true,
  generateUnionEnums: false,
  httpClientType: "fetch",
  moduleNameFirstTag: true,
  name: "api-client.ts",
  output: path.resolve(process.cwd(), "./generated"),
  silent: true,
  unwrapResponseData: false,
  // url: "./swagger.json",
  input: path.resolve(process.cwd(), "./swagger.json"),
});
