import swaggerJSDoc from "swagger-jsdoc";

// OpenAPI 3.0 Path specification for the /people endpoint
export const getPeopleEndpoint: swaggerJSDoc.Paths = {
  "/people": {
    get: {
      summary: "Get all people",
      description: "Retrieve a list of all people in the system",
      tags: ["People"],
      responses: {
        "200": {
          description: "Successful response",
          content: {
            "application/json": {
              schema: {
                type: "array",
                items: {
                  $ref: "#/components/schemas/Person",
                },
              },
              example: [
                {
                  id: 1,
                  name: "John Doe",
                  age: 30,
                  email: "john.doe@example.com",
                  city: "New York",
                  occupation: "Software Developer",
                },
                {
                  id: 2,
                  name: "Jane Smith",
                  age: 25,
                  email: "jane.smith@example.com",
                  city: "Los Angeles",
                  occupation: "Designer",
                },
              ],
            },
          },
        },
        "500": {
          description: "Internal server error",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
            },
          },
        },
      },
    },
  },
};
