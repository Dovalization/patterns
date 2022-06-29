import { User } from "../../../models/User";
import { IUsersRepository } from "./IUsersRepository";

const users: User[] = [];

const usersRepositoryModule: IUsersRepository = {
  create({ name, age }) {
    const user = new User();

    Object.assign(user, {
      name,
      age,
      created_at: new Date(),
    });

    users.push(user);
  },

  delete(id: string): void {
    const userIndex = users.findIndex((user: User) => user.id === id);

    if (userIndex !== -1) {
      users.splice(userIndex, 1);
    }

    throw new Error("User not found");
  },

  getAll(): User[] {
    return users;
  },

  getById(id: string): User {
    const foundUser = users.find((user: User) => user.id === id);

    if (foundUser) {
      return foundUser;
    }

    throw new Error("User not found");
  },

  updateAge(id: string, age: number): void {
    const foundUser = users.find((user: User) => user.id === id);
    if (foundUser) {
      const updatedUser: User = { age, ...foundUser };

      const updatedUsers = users.map((user: User) =>
        user.id === id ? updatedUser : user
      );

      users.splice(0, users.length, ...updatedUsers);
    }
    throw new Error("User not found");
  },

  updateName(id: string, name: string): void {
    const foundUser = users.find((user: User) => user.id === id);
    if (foundUser) {
      const updatedUser: User = { name, ...foundUser };

      const updatedUsers = users.map((user: User) =>
        user.id === id ? updatedUser : user
      );

      users.splice(0, users.length, ...updatedUsers);
    }
    throw new Error("User not found");
  },
};

export { usersRepositoryModule as UsersRepository };
