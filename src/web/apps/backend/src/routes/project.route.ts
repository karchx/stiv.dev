import container from "@api/dependency-injection";
import { Router } from "express";
import ProjectsController from "../controllers/ProjectGetController";

export const register = (router: Router) => {
  const controller: ProjectsController = container.get(
    "Apps.controllers.ProjectsController"
  );
  router.get("/project", controller.run.bind(controller));
};
