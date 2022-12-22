import { Router } from "express";
import { register as registerStatus } from "./status.route";
import { register as projectStatus } from "./project.route";

export function registerRoutes(router: Router) {
  registerStatus(router);
  projectStatus(router);
}
