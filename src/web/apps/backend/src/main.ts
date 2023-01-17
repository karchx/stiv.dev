import { StatusRoute } from "./routes/status.route";
import { Server } from "./server";
import { PORT } from "@config"

try {
  const port = PORT || "3333";
  const routes = [new StatusRoute()];

  console.info("PORT: ", PORT);

  const server = new Server({ port, routes });

  server.configure();

  server.listen();
} catch (e) {
  handleError(e);
}

function handleError(e: any) {
  console.log(e);
  process.exit(1);
}
