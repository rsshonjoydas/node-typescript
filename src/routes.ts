import { Application, Request, Response } from 'express';

export type Handler = (req: Request, res: Response) => void;

export interface IRoute {
  http: string;
  path: string;
  handler: Handler;
}

// TODO: dynamic routing setup
export const routes: IRoute[] = [
  {
    http: 'get',
    path: '/',
    handler: (req: Request, res: Response) => {
      res.send(`thanks ${req.method}`);
    },
  },
  {
    http: 'get',
    path: '/rs',
    handler: (req: Request, res: Response) => {
      res.send(`thanks for rs ${req.method}`);
    },
  },
  {
    http: 'get',
    path: '/shonjoy',
    handler: (req: Request, res: Response) => {
      res.send(`thanks for shonjoy ${req.method}`);
    },
  },
];
