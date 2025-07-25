import swaggerJSDoc from "swagger-jsdoc";

export interface Person {
  id: number;
  name: string;
  age: number;
  email: string;
  city: string;
  occupation: string;
}

export const personSchema: swaggerJSDoc.Schema = {
  type: "object",
  required: ["id", "name", "age", "email", "city", "occupation"],
  properties: {
    id: {
      type: "integer",
      description: "Unique identifier for the person",
      example: 1,
    },
    name: {
      type: "string",
      description: "Full name of the person",
      example: "John Doe",
    },
    age: {
      type: "integer",
      description: "Age of the person",
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
};
