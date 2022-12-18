import { Server } from "./server";

export class BackofficeBackendApp {
  server?: Server;

  async start() {
    const port = process.env.PORT || "3333";
    this.server = new Server(port);

    return this.server.listen();
  }

  get httpServer() {
    return this.server?.getHTTPServer();
  }

  async stop() {
    return this.server?.stop();
  }
}
