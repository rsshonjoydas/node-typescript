// ? external imports
import express, { Application } from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import cors from 'cors';

// ? internal imports
import routes from './controllers/routes';

const app = express();
dotenv.config();
const PORT = process.env.PORT || 5000;

const setupMongo = async () => {
  const uri = `${process.env.MONGO_CONNECTION_STRING}/${process.env.DB_NAME}?retryWrites=true&w=majority`;
  const options: mongoose.ConnectionOptions = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
  };

  try {
    await mongoose.connect(uri, options);
    console.log('database connection successfully!');
    mongoose.Promise = global.Promise;
  } catch (error) {
    console.log(error);
  }
};

const init = async (): Promise<void> => {
  let app = express();

  // ? request parser
  app.use(bodyParser.json());
  app.use(cors());

  app.use('/api', routes);

  app.use('/', (req, res) => {
    res.send('RS Shonjoy' + new Date());
  });

  await setupMongo();

  await app.listen(5000);
  console.log(`app listing to port ${PORT}`);
};

init();
