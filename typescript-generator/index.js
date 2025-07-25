import * as path from "node:path";
import * as process from "node:process";
import { generateApi } from "swagger-typescript-api";

await generateApi({
  input: path.resolve(process.cwd(), "./api-docs.json"),
  output: path.resolve(process.cwd(), "./generated"),
  name: "api-client.ts",
  generateClient: true, // Generate the full API client class
  httpClientType: "fetch", // Use fetch instead of axios
  generateRouteTypes: true, // Generate route types as well
  extractRequestBody: true, // Extract request body types
  extractResponseBody: true, // Extract response body types
  extractEnums: true, // Extract enums
  addReadonly: false, // Don't make properties readonly for easier use
  sortRoutes: true, // Sort routes alphabetically
  modular: false, // Keep everything in one file for simplicity
  silent: false, // Show progress
  disableThrowOnError: false, // Keep error throwing enabled
  unwrapResponseData: false, // Keep full response structure
});
