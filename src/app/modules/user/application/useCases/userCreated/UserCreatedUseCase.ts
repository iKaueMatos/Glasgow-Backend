import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { container } from "tsyringe";
import { UserRepository } from "../../../infra/repository/UserRepository";
import { ICreateUserDTO } from "../../dtos/ICreatedUserDTO";
import { IUser } from "../../../domain/entities/interfaces/IUser";
import { UserCreatedService } from "../../../domain/services/User.Service";
import { UserData } from "../../../domain/values-objects/UserData";

export class UserCreatedUseCase {
  async execute({
    name,
    email,
    password,
    phone
  }: ICreateUserDTO): Promise<IUser> {
      try {
        const userData = await UserData.create({ name, email, password, phone });
        const userRepository = container.resolve(UserRepository);
        const userAlreadyExists = await userRepository.findByEmail(userData.email);
  
        if (userAlreadyExists) {
          throw new CustomException('Erro', 'Este Usuário já existe!');
        }
  
        const userServiceCreate = container.resolve(UserCreatedService);
        return await userServiceCreate.createUser({
          name: userData.name,
          email: userData.email,
          password: userData.passwordHash,
          phone: userData.phone
        });
      } catch (error: any) {
        if (error instanceof CustomException) {
          throw error;
        } else {
          throw new CustomException('Erro interno do servidor', `${error}`);
        }
      }
  }
}