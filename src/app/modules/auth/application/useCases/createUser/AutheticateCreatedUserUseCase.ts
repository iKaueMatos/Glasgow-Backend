import { hash } from "bcrypt";
import { IUser } from "../../../../user/domain/model/IUser";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { container } from "tsyringe";
import { UserRepository } from "../../../../user/infra/infra/repository/UserRepository";
import { ICreateUserDTO } from "../../dtos/ICreatedUserDTO";

export class AutheticateUserUseCase {
  async execute({
    name,
    email,
    password,
  }: ICreateUserDTO): Promise<IUser> {
    const userRepository = container.resolve(UserRepository);
    const userAlreadyExists = await userRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new CustomException("Erro", "Este Usuário já existe!");
    }
    
    const passwordHash = await hash(password, 8);
    const user = userRepository.create({
      name,
      email,
      password: passwordHash,
    });

    return user;
  }
}