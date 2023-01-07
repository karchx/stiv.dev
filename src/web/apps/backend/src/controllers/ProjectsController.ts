import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "./Controller";

type CreateProjectRequest = {
  id: string;
  title: string;
  description: string;
  github: string;
  deploy?: string;
  image?: string;
};

export default class ProjectsController implements Controller {

  async run(req: Request<CreateProjectRequest>, res: Response): Promise<void> {
    await this.createProject(req);
    res.status(httpStatus.OK).send();
  }

  private async createProject(req: Request<CreateProjectRequest>) {
  }
}
