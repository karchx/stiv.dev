import {Server} from "./server";

try {
  const port = process.env.PORT || "3333";
  new Server(port).listen();
} catch (e) {
  handleError(e);
}

function handleError(e: any) {
  console.log(e);
  process.exit(1);
}
