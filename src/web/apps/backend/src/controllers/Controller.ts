import { Request, Response } from "express";

export interface Controller<T> {
  run(req: Request<T>, res: Response): Promise<void>;
}
