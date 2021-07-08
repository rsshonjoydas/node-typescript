import { IRoute } from './routes';
import { Request, Response } from 'express';
import { getStudent } from '../services/student.services';

const getHandler = async (req: Request, res: Response) => {
  const students = await getStudent();
  res.send(students);
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
