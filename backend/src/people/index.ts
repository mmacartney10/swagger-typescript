import { dummyPeople } from "../data/people";
import { Person } from "../types";

const getPeople = (req: any, res: any): void => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(dummyPeople, null, 2));
};

const postPeople = (req: any, res: any): void => {
  try {
    const newPerson: Person = req.body;

    // Generate a new ID
    const newId = Math.max(...dummyPeople.map((p) => p.id)) + 1;
    newPerson.id = newId;

    dummyPeople.push(newPerson);

    res.status(201).json(newPerson);
  } catch (error) {
    res.status(400).json({ error: "Invalid person data" });
  }
};

export { getPeople, postPeople };
