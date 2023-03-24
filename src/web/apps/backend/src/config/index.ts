import { config } from "dotenv";
import path from "path";

const folder = path.resolve() + "/apps/backend/";

config({ path: `${folder}/.env.dev.local` });

export const {
  PORT,
  NODE_ENV,
  DB_HOST,
  DB_PORT,
  DB_PASSWORD,
  DB_USER,
  DB_DATABASE,
  CLUSTER_MONGO,
  LOG_FORMAT
} = process.env;
