import {Router} from "express";
import glob from "glob";

export function registerRoutes(router: Router) {
  const routes = glob.sync(`**/*.route.*`);
  console.log(routes);
  routes.map(route => register(route, router));
}



async function register(routePath: string, app: Router) {
  const route = require(routePath);
  // route.register(app);
}
