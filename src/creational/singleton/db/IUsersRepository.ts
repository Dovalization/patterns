import { User } from "../../../models/User";

interface ICreateUserDTO {
  name: string;
  age: number;
}

interface IUsersRepository {
  create({ name, age }: ICreateUserDTO): void;
  delete(id: string): void;
  updateName(id: string, name: string): void;
  updateAge(id: string, age: number): void;
  getById(id: string): User;
  getAll(): User[];
}

export { IUsersRepository, ICreateUserDTO };
