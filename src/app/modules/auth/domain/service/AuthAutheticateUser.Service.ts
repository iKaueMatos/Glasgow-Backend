import { compare } from "bcrypt";
import auth from "../../../../core/config/auth/auth";
import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { UserRepository } from "../../../user/infra/infra/repository/UserRepository";
import { UserRepositoryToken } from "../../../user/infra/infra/repository/UserRepositoryToken";
import { sign } from "jsonwebtoken";
import { IRequest } from "../../application/dtos/IRequest";
import { IResponse } from "../../application/dtos/IResponse";
import { container } from "tsyringe";
import { IAuthAutheticateUserService } from "./implementations/IAuthAutheticateUser.Service";

export class AuthAutheticateUserService implements IAuthAutheticateUserService {
  dateProvider = new DayjsDateProvider();
  
  async autheticate({ email, password }: IRequest): Promise<IResponse> {
    const userRepository = container.resolve(UserRepository);
    const user = await userRepository.findByEmail(email);
    const {
      expires_in_token,
      secret_refresh_token,
      secret_token,
      expires_in_refresh_token,
      expires_refresh_token_days,
    } = auth;
    
    if (!user) {
      throw new CustomException("Erro", "Email ou senha incorreto!");
    }
    
    const passwordMatch = await compare(password, user.password);
    
    if (!passwordMatch) {
      throw new CustomException("Erro", "Email ou senha incorreto!");
    }
    
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
      refresh_token: refresh_token,
      expires_date: refresh_token_expires_date,
    });
    
    const tokenReturn: IResponse = {
      token,
      user: {
        name: user.name,
        email: user.email,
      },
      refresh_token,
    };
    
    return tokenReturn;
  }
}