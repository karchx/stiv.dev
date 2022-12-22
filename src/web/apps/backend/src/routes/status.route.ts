import container from "@api/dependency-injection";
import { Router } from "express";
import StatusController from "../controllers/StatusGetController";

export const register = (router: Router) => {
  const controller: StatusController = container.get(
    "Apps.controllers.StatusGetController"
  );
  router.get("/status", controller.run.bind(controller));
};
