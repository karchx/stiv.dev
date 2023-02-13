import {DBConnectionConfig} from "@/interfaces/database.interface";
import {CLUSTER_MONGO, DB_HOST, DB_PASSWORD, DB_USER} from "@config";

export const dbConnection: DBConnectionConfig = {
  url: `${DB_HOST}://${DB_USER}:${DB_PASSWORD}@${CLUSTER_MONGO}`,
  //url: `mongodb://${DB_HOST}:${DB_PORT}/${DB_DATABASE}`,
  options: {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
};
