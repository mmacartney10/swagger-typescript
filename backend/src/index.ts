import express from "express";
import { setupSwagger } from "./swagger";
import { getPeople, postPeople } from "./people";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());

setupSwagger(app);

app.get("/api/people", getPeople);

app.post("/api/people", postPeople);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  console.log(`People API available at http://localhost:${PORT}/api/people`);
});
