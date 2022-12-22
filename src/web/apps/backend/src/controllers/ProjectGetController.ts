import { Request, Response } from "express";
import httpStatus from "http-status";
import { Controller } from "./Controller";

export default class ProjectsController implements Controller {
  async run(req: Request, res: Response): Promise<void> {
    res.status(httpStatus.OK).json({
      message: "ok project"
    });
  }
}
