import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { container } from "tsyringe";

import auth from "../../../../core/config/auth/auth";
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { UserRepository } from "../../infra/repository/UserRepository";
import { UserRepositoryToken } from "../../infra/repository/UserRepositoryToken";
import { IRequest } from "../../interfaces/dtos/IRequest";
import { IResponse } from "../../interfaces/dtos/IResponse";
import { IAuthAutheticateUserService } from "../../application/services/IAuthAutheticateUser.Service";

export class AuthAuthenticateUserService implements IAuthAutheticateUserService {
  private dateProvider = new DayjsDateProvider();

  async authenticate({ email, password }: IRequest): Promise<IResponse> {
    try {
      const userRepository = container.resolve(UserRepository);
      const user = await userRepository.findByEmail(email);

      if (!user) {
        throw new CustomException("Erro", "Email ou senha incorretos!");
      }

      const passwordMatch = await compare(password, user.password);
      if (!passwordMatch) {
        throw new CustomException("Erro", "Email ou senha incorretos!");
      }

      const {
        secret_token,
        expires_in_token,
        secret_refresh_token,
        expires_in_refresh_token,
        expires_refresh_token_days,
      } = auth;

      const token = sign({}, secret_token, {
        subject: user.id.toString(),
        expiresIn: expires_in_token,
      });

      const refresh_token = sign({ email }, secret_refresh_token, {
        subject: user.id.toString(),
        expiresIn: expires_in_refresh_token,
      });

      const refresh_token_expires_date = this.dateProvider.addDays(
        expires_refresh_token_days
      );

      const userTokenRepository = container.resolve(UserRepositoryToken);
      await userTokenRepository.create({
        user_id: user.id,
        refresh_token,
        expires_date: refresh_token_expires_date,
      });

      const tokenReturn: IResponse = {
        status: 200,
        token,
        user: {
          name: user.name,
          email: user.email,
        },
        refresh_token,
        error: '',
      };

      return tokenReturn;
    } catch (error) {
      console.error("Erro ao autenticar usuário:", error);
      
      let errorMessage = "Erro ao autenticar usuário.";
      if (error instanceof CustomException) {
        errorMessage = error.message;
      }

      const errorResponse: IResponse = {
        status: 500,
        token: '',
        user: {
          name: '',
          email: '',
        },
        refresh_token: '',
        error: errorMessage,
      };

      return errorResponse;
    }
  }
}
