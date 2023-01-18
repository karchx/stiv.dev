import { DBConnectionConfig } from "@/interfaces/database.interface";
import { DB_HOST, DB_PORT, DB_DATABASE } from "@config";

export const dbConnection: DBConnectionConfig = {
  url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
