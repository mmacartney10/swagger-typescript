import swaggerJSDoc from "swagger-jsdoc";

// OpenAPI 3.0 Path specification for the /people endpoint
export const getPeopleEndpoint: swaggerJSDoc.Paths = {
  "/api/people": {
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
    post: {
      summary: "Create a new person",
      description: "Add a new person to the system",
      tags: ["People"],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              type: "object",
              required: ["name", "age", "email", "city", "occupation"],
              properties: {
                name: {
                  type: "string",
                  description: "Full name of the person",
                  example: "John Doe",
                },
                age: {
                  type: "number",
                  description: "Age of the person",
                  minimum: 0,
                  maximum: 150,
                  example: 30,
                },
                email: {
                  type: "string",
                  format: "email",
                  description: "Email address of the person",
                  example: "john.doe@example.com",
                },
                city: {
                  type: "string",
                  description: "City where the person lives",
                  example: "New York",
                },
                occupation: {
                  type: "string",
                  description: "Job title or occupation",
                  example: "Software Developer",
                },
              },
            },
            example: {
              name: "John Doe",
              age: 30,
              email: "john.doe@example.com",
              city: "New York",
              occupation: "Software Developer",
            },
          },
        },
      },
      responses: {
        "201": {
          description: "Person created successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Person",
              },
              example: {
                id: 123,
                name: "John Doe",
                age: 30,
                email: "john.doe@example.com",
                city: "New York",
                occupation: "Software Developer",
              },
            },
          },
        },
        "400": {
          description: "Bad request - Invalid input data",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/Error",
              },
              example: {
                error: "Invalid JSON data",
              },
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
