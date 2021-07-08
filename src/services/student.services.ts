export interface Student {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export interface StudentViewModel {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export interface StudentRequestModel {
  id: string;
  name: string;
  phone: string;
  email: string;
}

export const getStudent = async (): Promise<StudentViewModel[]> => {
  return await [
    {
      id: '111',
      name: 'Shonjoy',
      phone: '01311401701',
      email: 'rsshonjoydas@gmail.com',
    },
  ];
};
