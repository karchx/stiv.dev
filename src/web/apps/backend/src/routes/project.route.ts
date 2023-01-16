import { Request, Response, Router } from "express";

export const register = (router: Router) => {
  router.get("/project", (req: Request, res: Response) => {
    res.json({ message: "project" });
  });
};
