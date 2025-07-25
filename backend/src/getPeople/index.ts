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

export default getPeople;
