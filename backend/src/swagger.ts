import swaggerJSDoc from "swagger-jsdoc";
import { getPeopleEndpoint } from "./getPeople/swagger";
import { personSchema } from "./getPeople/types";

const options: swaggerJSDoc.Options = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Insert Name Here API",
      version: "1.0.0",
      description: "A simple Express API with Polka framework",
      contact: {
        name: "API Support",
        email: "support@example.com",
      },
    },
    tags: [
      {
        name: "People",
        description: "Operations related to people data",
      },
      {
        name: "Pages",
        description: "Web page endpoints",
      },
    ],
    servers: [
      {
        url: "http://localhost:3000",
        description: "Development server",
      },
    ],
    paths: {
      ...getPeopleEndpoint,
    },
    components: {
      schemas: {
        Person: personSchema,
        Error: {
          type: "object",
          properties: {
            message: {
              type: "string",
              description: "Error message",
            },
            code: {
              type: "integer",
              description: "Error code",
            },
          },
        },
      },
    },
  },
  apis: [],
};

export const swaggerSpec = swaggerJSDoc(options);
