import express from "express";
import compress from "compression";
import morgan from "morgan";
import * as http from "http";
import helmet from "helmet";
import { connect, set } from "mongoose";

import { Routes } from "@interfaces/routes.interface";
import { AppArgstType } from "@interfaces/app.interface";
import { LOG_FORMAT, NODE_ENV } from "@config";
import { stream } from "@utils/logger";
import { dbConnection } from "./databases";

export class Server {
  private express: express.Express;
  private env: string;
  readonly port: string;
  httpServer?: http.Server;
  routes: Routes[];

  constructor({ port, routes = [] }: AppArgstType) {
    this.port = port;
    this.env = NODE_ENV || "development";
    this.express = express();
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

  async configure() {
    this.connectToDatabase(() => {
      this.initializeMiddlewares();
      this.initializeRoutes(this.routes);
    });
  }

  private async connectToDatabase(onSuccessConnect?: CallableFunction) {
    if (this.env !== "production") {
      set("debug", true);
    }

    try {
      set("strictQuery", false);
      await connect(dbConnection.url);
      console.info("DB is connected: ", dbConnection.url);
      onSuccessConnect?.();
    } catch (e) {
      console.error(`DB is not connected :( ${e}`);
    }
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

  private initializeMiddlewares() {
    this.express.use(morgan(LOG_FORMAT || "", { stream }));
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: "deny" }));
    this.express.use(compress());
  }

  private initializeRoutes(routes: Routes[]) {
    routes.forEach(route => {
      this.express.use("/", route.router);
    });
  }
}
