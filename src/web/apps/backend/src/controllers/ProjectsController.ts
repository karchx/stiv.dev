import { Request, Response } from "express";
import httpStatus from "http-status";
import {ProjectCreator} from "../context/mooc/application/ProjectCreator";
import { Controller } from "./Controller";

type CreateProjectRequest = {
  id: string;
  title: string;
  description: string;
  github: string;
  tags: string[];
  web?: string;
};

export default class ProjectsController implements Controller<CreateProjectRequest> {
  constructor(private projectCreator: ProjectCreator) {}


  async run(req: Request<CreateProjectRequest>, res: Response): Promise<void> {
    try {
      const { id, title, description, github, tags, web } = req.body;
      // await this.projectCreator.run(id, title, description, github, tags, web);
      this.projectCreator.run();
      res.status(httpStatus.CREATED).send();
    } catch(err) {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send();
    }
  }
}
