import { Request, Response } from "express";
import { peopleData } from "../../data/people";
import { Person } from "../../types";

const getPeople = (request: Request, response: Response): void => {
  console.log("getPeople");
  response.status(200).json(peopleData);
};

const postPeople = (request: Request, response: Response): void => {
  console.log("postPeople", request.body);

  try {
    const newPerson: Person = {
      ...request.body,
    } as Person;

    peopleData.push(newPerson);

    response.status(201).json(newPerson);
  } catch (error) {
    response.status(400).json({ error: "Invalid person data" });
  }
};

export { getPeople, postPeople };
