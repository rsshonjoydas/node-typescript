// ? external imports
import express, { Application, Request, Response } from 'express';
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// ? internal imports

const PORT = process.env.PORT || 5000;

export type Handler = (req: Request, res: Response) => void;

interface IRoute {
  http: string;
  path: string;
  handler: Handler;
}

const init = (): Application => {
  let app = express();

  // TODO: dynamic routing setup
  let routes: IRoute[] = [
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

  routes.forEach((route) => {
    (app as any)[route.http](route.path, route.handler);
  });

  app.use('/', (req, res) => {
    res.send('RS Shonjoy' + new Date());
  });

  return app;
};

const app = init();
app.listen(PORT, () => {
  console.log(`app listing to port ${PORT}`);
});
