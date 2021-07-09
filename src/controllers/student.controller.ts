import { save } from './../services/student.services';
import { IRoute } from './routes';
import { Request, Response } from 'express';
import { getStudent } from '../services/student.services';

const getHandler = async (req: Request, res: Response) => {
  const students = await getStudent();
  res.send(students);
};

const postHandler = async (req: Request, res: Response) => {
  let savedId = await save(req.body);
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
