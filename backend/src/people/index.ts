import { Request, Response } from "express";
import { dummyPeople } from "../data/people";
import { Person } from "../types";

const getPeople = (request: Request, response: Response): void => {
  response.status(200).json(dummyPeople);
};

const postPeople = (request: Request, response: Response): void => {
  try {
    const newPerson: Person = {
      ...request.body,
      id: dummyPeople.length + 1,
    } as Person;

    dummyPeople.push(newPerson);

    response.status(201).json(newPerson);
  } catch (error) {
    response.status(400).json({ error: "Invalid person data" });
  }
};

export { getPeople, postPeople };
