import express, { Application, Request, Response, Router } from 'express';
import { routes as studentRoutes } from './student.controller';

export type Handler = (req: Request, res: Response) => void;

export interface IRoute {
  http: string;
  path: string;
  handler: Handler;
}

// TODO: dynamic routing setup
const routes: IRoute[] = [
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
  ...studentRoutes,
];

let router: Router = express.Router();

routes.forEach((route) => {
  (router as any)[route.http](route.path, route.handler);
});

export default router;
