import express from "express";
import { setupSwagger } from "./swagger";
import { getPeople } from "./people";

const app = express();
const PORT = process.env.PORT || 3001;

setupSwagger(app);

app.get("/api/people", getPeople);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  console.log(`People API available at http://localhost:${PORT}/api/people`);
});
