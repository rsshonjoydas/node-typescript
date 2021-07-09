import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const StudentSchema = new Schema({
  name: { type: String },
  phone: { type: String },
  email: { type: String },
  createdAt: { type: Date },
  modifiedAt: { type: Date },
});

export interface Student extends mongoose.Document {
  id: string;
  name: string;
  phone: string;
  email: string;
  createdAt: Date;
  modifiedAt: Date;
}

const StudentDocument = mongoose.model<Student>(
  'Student',
  StudentSchema,
  'Students'
);

export interface StudentViewModel {
  id: string;
  name: string;
  phone: string;
  email: string;
}

const convert = (model: Student): StudentViewModel => {
  let viewModel: StudentViewModel = {
    ...JSON.parse(JSON.stringify(model)),
  };
  return viewModel;
};

export interface StudentRequestModel {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export const getStudent = async (): Promise<StudentViewModel[]> => {
  const students = await StudentDocument.find().exec();
  const newViewModel: StudentViewModel[] = students.map((student) =>
    convert(student)
  );
  return newViewModel;
};

export const save = async (payload: any): Promise<string> => {
  const newStudent = new StudentDocument({
    ...payload,
    id: new mongoose.Types.ObjectId(),
    createdAt: new Date(),
  });
  const saveStudent = await newStudent.save();
  return saveStudent.id;
};
