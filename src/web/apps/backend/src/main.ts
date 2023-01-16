import {StatusRoute} from "./routes/status.route";
import {Server} from "./server";

try {
  const port = process.env.PORT || "3333";
  const routes = [new StatusRoute()];

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
