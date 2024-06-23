import { IUser } from "../entities/interfaces/IUser";
import { UserRepository } from '../../infra/repository/UserRepository';
import { container } from "tsyringe";

export class UserCreatedService {
  constructor() {}

  async createUser ({ name, email, password, phone }: { name: string; email: string; password: string; phone: string; }): Promise<IUser> {
      const userRepository = container.resolve(UserRepository);
      return userRepository.create({ name, email, password, phone });
  }
}