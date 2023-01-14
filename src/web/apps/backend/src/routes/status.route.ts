import {Request, Response, Router} from "express";
import httpStatus from "http-status";

export const register = (router: Router) => {
  router.get("/status", (req: Request, res: Response) => {
    res.sendStatus(httpStatus.OK);
  });
};
