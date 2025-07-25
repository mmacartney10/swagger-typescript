import { join } from "path";
import { readFileSync } from "fs";
import polka from "polka";
import serveStatic from "serve-static";
import { getPeople, postPerson } from "./people";
import { swaggerSpec } from "./swagger";

const swaggerUiAssetPath = require("swagger-ui-dist").getAbsoluteFSPath();

const { PORT = "3001" } = process.env;
const port = parseInt(PORT, 10);

const dir = join(__dirname, "../public");
const serve = serveStatic(dir);

const frontendBuildPath = join(__dirname, "../../frontend/build");
const serveFrontend = serveStatic(frontendBuildPath);

const serveHtmlFile = (res: any, htmlFileName: string) => {
  const htmlPath = join(__dirname, `../${htmlFileName}.html`);
  const html = readFileSync(htmlPath, "utf8");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
};

const serveFrontendIndex = (req: any, res: any) => {
  const indexPath = join(frontendBuildPath, "index.html");
  const html = readFileSync(indexPath, "utf8");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end(html);
};

polka()
  // API routes (these should come first to take precedence)
  .get("/api/swagger.json", (req: any, res: any) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(swaggerSpec, null, 2));
  })
  .get("/api/people", getPeople)
  .post("/api/people", postPerson)
  .get("/api-docs", (req: any, res: any) => serveHtmlFile(res, "swagger"))

  // Legacy routes for backward compatibility
  .get("/swagger.json", (req: any, res: any) => {
    res.writeHead(200, { "Content-Type": "application/json" });
    res.end(JSON.stringify(swaggerSpec, null, 2));
  })
  .get("/people", getPeople)
  .get("/home", (req: any, res: any) => serveHtmlFile(res, "index"))

  // Static file serving
  .use("/public", serve)
  .use("/swagger-ui-assets", serveStatic(swaggerUiAssetPath))

  // Serve React build static files
  .use("/static", serveStatic(join(frontendBuildPath, "static")))

  // Serve React app for all other routes (SPA fallback)
  .use(serveFrontend)
  .get("*", serveFrontendIndex)

  .listen(port, (err?: Error) => {
    if (err) throw err;
    console.log(`> Running on localhost:${port}`);
    console.log(`> React App available at http://localhost:${port}`);
    console.log(
      `> API documentation available at http://localhost:${port}/api-docs`
    );
    console.log(
      `> Swagger JSON available at http://localhost:${port}/api/swagger.json`
    );
    console.log(
      `> People API available at http://localhost:${port}/api/people`
    );
  });
