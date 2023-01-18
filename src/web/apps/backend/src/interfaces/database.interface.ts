import { ConnectOptions } from "mongoose";

export interface DBConnectionConfig {
  url: string;
  options?: ConnectOptions & { useNewUrlParser: boolean; useUnifiedTopology: boolean };
}
