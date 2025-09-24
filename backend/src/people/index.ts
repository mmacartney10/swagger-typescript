import { dummyPeople } from "../data/people";

const getPeople = (req: any, res: any): void => {
  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(dummyPeople, null, 2));
};

export { getPeople };
