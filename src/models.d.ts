export interface IUserData {
  name: string;
  age: number;
}

export interface IClass {
  name: string;
  id: string;
  students: IStudent[];
}

export interface IStudent {
  id: number;
  name: string;
  age: number;
  video: number;
  level: number;
  lastTime: number;
}

export interface IMenu {
  img: string;
  title: string;
  to: string;
}
