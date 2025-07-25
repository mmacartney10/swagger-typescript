import { Person } from "./types";

const getPeople = (req: any, res: any): void => {
  const dummyPeople: Person[] = [
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
    {
      id: 3,
      name: "Bob Johnson",
      age: 35,
      email: "bob.johnson@example.com",
      city: "Chicago",
      occupation: "Project Manager",
    },
    {
      id: 4,
      name: "Alice Brown",
      age: 28,
      email: "alice.brown@example.com",
      city: "San Francisco",
      occupation: "Data Scientist",
    },
    {
      id: 5,
      name: "Charlie Wilson",
      age: 32,
      email: "charlie.wilson@example.com",
      city: "Seattle",
      occupation: "DevOps Engineer",
    },
  ];

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(dummyPeople, null, 2));
};

const postPerson = (req: any, res: any): void => {
  let body = "";
  req.on("data", (chunk: any) => {
    body += chunk.toString();
  });
  req.on("end", () => {
    try {
      const newPerson: Person = JSON.parse(body);

      // Log the received person data
      console.log("Received new person:", newPerson);
      console.log("Person details:", {
        name: newPerson.name,
        age: newPerson.age,
        email: newPerson.email,
        city: newPerson.city,
        occupation: newPerson.occupation,
      });

      // Here you would typically save the new person to your database
      // For now, we'll just assign a new ID and return it
      const personWithId: Person = {
        ...newPerson,
        id: Math.floor(Math.random() * 10000) + 100, // Generate a random ID
      };

      console.log("Returning person with ID:", personWithId);

      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(personWithId, null, 2));
    } catch (error) {
      console.error("Error parsing person data:", error);
      res.writeHead(400, { "Content-Type": "application/json" });
      res.end(JSON.stringify({ error: "Invalid JSON data" }, null, 2));
    }
  });
};

export { getPeople, postPerson };
