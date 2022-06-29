import { User } from "../../../models/User";
import { ICreateUserDTO, IUsersRepository } from "./IUsersRepository";

class UsersRepository implements IUsersRepository {
  private static instance: UsersRepository | null = null;
  private users: User[] = [];

  private constructor() {}

  static getInstance(): UsersRepository {
    if (UsersRepository.instance === null) {
      UsersRepository.instance = new UsersRepository();
    }
    return UsersRepository.instance;
  }

  create({ age, name }: ICreateUserDTO): void {
    const user = new User();

    Object.assign(user, {
      name,
      age,
      created_at: new Date(),
    });

    this.users.push(user);
  }

  delete(id: string): void {
    this.users = this.users.filter((user) => user.id !== id);
  }

  updateName(id: string, name: string): void {
    const foundUser = this.users.find((user) => user.id === id);
    if (foundUser) {
      const updatedUser: User = { name, ...foundUser };
      const updatedUsers = this.users.map((user) =>
        user.id === id ? updatedUser : user
      );

      this.users = updatedUsers;
    }

    throw new Error("User not found");
  }

  updateAge(id: string, age: number): void {
    const foundUser = this.users.find((user) => user.id === id);
    if (foundUser) {
      const updatedUser: User = { age, ...foundUser };
      const updatedUsers = this.users.map((user) =>
        user.id === id ? updatedUser : user
      );

      this.users = updatedUsers;
    }
    throw new Error("User not found");
  }

  getById(id: string): User {
    const foundUser = this.users.find((user) => user.id === id);
    if (foundUser) {
      return foundUser;
    }

    throw new Error("User not found");
  }
  getAll(): User[] {
    return this.users;
  }
}

export { UsersRepository as MyDatabaseClassic };
