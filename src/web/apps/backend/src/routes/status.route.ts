import container from '@api/dependency-injection';
import {Request, Response, Router} from 'express';
import StatusController from '../controllers/StatusGetController';

export const register = (router: Router) => {
  const controller: StatusController = container.get('Apps.controllers.StatusGetController');
  router.get('/status', (req: Request, res: Response) => controller.run(req, res))
}

