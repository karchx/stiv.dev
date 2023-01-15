import {Request, Response} from "express";

export class IndexController {
  index = (req: Request, res: Response) => {
    try {
      res.sendStatus(200)
    } catch(e) {
      console.error(e)
    }
  }
}
