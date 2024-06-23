import { IUser } from "../entities/interfaces/IUser";
import { UserRepository } from '../../infra/repository/UserRepository';
import { container } from "tsyringe";

export class UserCreatedService {
  constructor() {}

  async createUser ({ name, email, password }: { name: string; email: string; password: string; }): Promise<IUser> {
      const userRepository = container.resolve(UserRepository);
      return userRepository.create({ name, email, password });
  }
}