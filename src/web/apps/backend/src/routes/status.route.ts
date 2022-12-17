import {Express} from 'express';

export const register = (app: Express) => {
  app.get("/status", (req, res) => {
    res.send({message: "Welcome to backend!"});
  });
}

