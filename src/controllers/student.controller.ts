import {
  save,
  StudentDocument,
  getStudent,
} from '../services/student.services';
import { IRoute } from './routes';
import { Request, Response } from 'express';

const getHandler = async (req: Request, res: Response) => {
  const students = await getStudent();
  res.send(students);
};

const collection = StudentDocument;

const postHandler = async (req: Request, res: Response) => {
  let savedId = await save(collection, req.body);
  res.send(`thanks for ${savedId}`);
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
