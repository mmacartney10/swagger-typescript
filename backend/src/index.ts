import express from "express";
import cors from "cors";
import { setupSwagger } from "./swagger";
import { getPeople, postPeople } from "./people";
import { getAbout } from "./about";

const app = express();
const PORT = process.env.PORT || 3001;

app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization", "Accept"],
    exposedHeaders: ["Content-Length", "X-Powered-By"],
  }),
);

app.use(express.json());

setupSwagger(app);

app.get("/api/people", getPeople);
app.post("/api/people", postPeople);
app.get("/api/about", getAbout);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
  console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`);
  console.log(`People API available at http://localhost:${PORT}/api/people`);
  console.log(`About API available at http://localhost:${PORT}/api/about`);
});
