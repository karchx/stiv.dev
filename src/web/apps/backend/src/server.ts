import express, { Request, Response } from "express";
import compress from "compression";
import errorHandler from "errorhandler";
import * as http from "http";
import httpStatus from "http-status";
import helmet from "helmet";
import Router from "express-promise-router";
import cors from "cors";
import { registerRoutes } from "./routes";

export class Server {
  private express: express.Express;
  readonly port: string;
  httpServer?: http.Server;

  constructor(port: string) {
    this.port = port;
    this.express = express();
    this.express.use(express.json());
    this.express.use(express.urlencoded({ extended: true }));
    this.express.use(helmet.xssFilter());
    this.express.use(helmet.noSniff());
    this.express.use(helmet.hidePoweredBy());
    this.express.use(helmet.frameguard({ action: "deny" }));
    this.express.use(compress());
    const router = Router();
    router.use(cors());
    router.use(errorHandler());
    this.express.use(router);
    registerRoutes(router);

    router.use((err: Error, req: Request, res: Response, next: Function) => {
      console.error(err);
      res.status(httpStatus.INTERNAL_SERVER_ERROR).send(err.message);
    });
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
}
