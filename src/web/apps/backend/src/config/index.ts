import { config } from 'dotenv';
import path from 'path';

const folder = path.resolve() + '/apps/backend/';

config({ path: `${folder}/.env.dev.local` });

export const {
  PORT,
  DB_HOST,
  DB_PORT,
  DB_DATABAS
} = process.env;
