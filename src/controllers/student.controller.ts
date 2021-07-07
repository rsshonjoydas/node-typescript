import { IRoute } from './routes';
import { Request, Response } from 'express';

export const routes: IRoute[] = [
  {
    http: 'get',
    path: '/student',
    handler: (req: Request, res: Response) => {
      res.send(`thanks ${req.method}`);
    },
  },
  {
    http: 'post',
    path: '/student',
    handler: (req: Request, res: Response) => {
      res.send(`thanks for ${req.method}`);
    },
  },
];
