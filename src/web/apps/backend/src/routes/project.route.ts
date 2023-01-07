import container from "@api/dependency-injection";
import { Router } from "express";
import ProjectsController from "../controllers/ProjectsController";

export const register = (router: Router) => {
  const controller: ProjectsController = container.get(
    "Apps.controllers.ProjectsController"
  );
  router.post("/project", controller.run.bind(controller));
};
