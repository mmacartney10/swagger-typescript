import * as path from "node:path";
import * as process from "node:process";
import { generateApi } from "swagger-typescript-api";

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
  // sortRoutes: true,
  modular: false,
  silent: false,
  // disableThrowOnError: false,
  unwrapResponseData: false,
  extractRequestParams: true,
  url: "http://localhost:3001/swagger.json",
});
