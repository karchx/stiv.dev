import { Router } from "express";
import glob from "glob";

export function registerRoutes(router: Router) {
  const dirname = "/src/web/apps/backend";
  //const routes = glob.sync(`${dirname}/**/*.route.ts`);
  // const routes = glob.sync(dirname + '/**/*.route.*');
  const routes = ["../routes/status.route"];
  //routes.map(route => register(route, router));
  register("", router);
}

function register(routePath: string, router: Router) {
  const route = require("../routes/status.route");
  route.register(router);
}
