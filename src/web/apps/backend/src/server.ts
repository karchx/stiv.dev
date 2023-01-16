import express from "express";
import compress from "compression";
import * as http from "http";
import helmet from "helmet";
import { Routes } from "@interfaces/routes.interface";
import { AppArgstType } from "@interfaces/app.interface";

export class Server {
  private express: express.Express;
  readonly port: string;
  httpServer?: http.Server;
  routes: Routes[];

  constructor({ port, routes = [] }: AppArgstType) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: "deny" }));
    this.express.use(compress());
    this.routes = routes;
  }

  async listen(): Promise<void> {
    return new Promise(resolve => {
      this.httpServer = this.express.listen(this.port, () => {
        console.log(`Listening at http://localhost:${this.port}`);
        console.info("  Press CTRL-C to stop\n");
        resolve();
      });
    });
  }

  configure() {
    this.initializeRoutes(this.routes);
  }

  getHTTPServer() {
    return this.httpServer;
  }

  async stop(): Promise<void> {
    return new Promise((resolve, reject) => {
      if (this.httpServer) {
        this.httpServer.close(error => {
          if (error) {
            return reject(error);
          }
          return resolve();
        });
      }

      return resolve();
    });
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.express.use("/", route.router);
    });
  }
}
