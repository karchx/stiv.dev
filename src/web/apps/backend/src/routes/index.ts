import { Router } from "express";
import glob from "glob";

export function registerRoutes(router: Router) {
  const dirname = "/src/web/apps/backend";
  const routes = glob.sync(`${dirname}/**/*.route.ts`);
  routes.map(route => register(route, router));
}

function register(routePath: string, router: Router) {
  console.log(routePath);
  const route = require(routePath);
  route.register(router);
}
