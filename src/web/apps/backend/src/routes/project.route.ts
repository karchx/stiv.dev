import { ProjectController } from "@/controllers/project.controller";
import { Routes } from "@/interfaces/routes.interface";
import validationMiddleware from "@/middlewares/validation.middleware";
import { createProjectDto } from "@/dtos/projects.dto";
import { Router } from "express";

export class ProjectRoute implements Routes {
  public path = "/project";
  public router = Router();
  public projectController = new ProjectController();

  constructor() {
    this.initializeRoutes();
  }

  private initializeRoutes() {
    this.router.get(`${this.path}`, this.projectController.index);
    this.router.post(
      `${this.path}`,
      validationMiddleware(createProjectDto, "body"),
      this.projectController.create
    );
  }
}

export default ProjectRoute;
