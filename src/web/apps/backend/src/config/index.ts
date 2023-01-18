import { config } from "dotenv";
import path from "path";

const folder = path.resolve() + "/apps/backend/";

config({ path: `${folder}/.env.dev.local` });

export const { PORT, NODE_ENV, DB_HOST, DB_PORT, DB_DATABASE, LOG_FORMAT } = process.env;
