// ? external imports
import express, { Application } from 'express';
const mongoose = require('mongoose');
const dotenv = require('dotenv');

// ? internal imports
import { routes } from './routes';

const PORT = process.env.PORT || 5000;

const init = (): Application => {
  let app = express();

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
