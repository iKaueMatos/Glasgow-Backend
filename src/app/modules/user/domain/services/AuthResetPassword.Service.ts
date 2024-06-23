import { hash } from "crypto";
import { UserRepository } from "../../infra/repository/UserRepository";
import { UserRepositoryToken } from "../../infra/repository/UserRepositoryToken";
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { IDateProvider } from "../../../../shared/container/providers/DateProvider/IDateProvider";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { ITokenRequest } from "../../application/dtos/IToken";
import { container } from "tsyringe";
import { IAuthResetPasswordService } from "../../application/services/IAuthResetPassword.Service";

export class AuthResetPasswordService implements IAuthResetPasswordService {
  dateProvider: IDateProvider = new DayjsDateProvider();
  
  async resetPassword(userToken: { user_id: number; id: number }, newPassword: string): Promise<void> {
    const userRepositoryToken = container.resolve(UserRepositoryToken);
    const userRepository = container.resolve(UserRepository);
    const user = await userRepository.findById(userToken.user_id);
    if (user) {
      const hashedPassword = await hash(newPassword, "13");
      user.password = hashedPassword;
      await userRepository.update(user);
      await userRepositoryToken.deleteById(userToken.id);
    }
  }

  async resetPasswordIsRefleshToken({ token, password }: ITokenRequest): Promise<void> {
    const userRepositoryToken = container.resolve(UserRepositoryToken);
    const userToken = await userRepositoryToken.findByRefreshToken(token);
    const userRepository = container.resolve(UserRepository);

    if (!userToken) {
      throw new CustomException("erro", "Token inválido!");
    }

    if (this.dateProvider.compareIfBefore(userToken.expiresDate, this.dateProvider.dateNow())) {
      throw new CustomException("erro", "Token Expirado!");
    }

    const user = await userRepository.findById(userToken.userId);
    if (!user) {
      throw new CustomException("erro", "Usuário não encontrado!");
    }

    user.password = await hash(password, "13");
    await userRepository.update(user);
    await userRepositoryToken.deleteById(userToken.id);
  }
}