import { Request, Response } from "express";
import { aboutData } from "../../data/about";

const getAbout = (request: Request, response: Response): void => {
  response.status(200).json(aboutData);
};

export { getAbout };
