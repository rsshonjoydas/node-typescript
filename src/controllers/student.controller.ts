import { IRoute } from './routes';
import { Request, Response } from 'express';

const getHandler = (req: Request, res: Response) => {
  res.send(`thanked ${req.method}`);
};

const postHandler = (req: Request, res: Response) => {
  res.send(`thanks for ${req.method}`);
};

export const routes: IRoute[] = [
  {
    http: 'get',
    path: '/student',
    handler: getHandler,
  },
  {
    http: 'post',
    path: '/student',
    handler: postHandler,
  },
];
