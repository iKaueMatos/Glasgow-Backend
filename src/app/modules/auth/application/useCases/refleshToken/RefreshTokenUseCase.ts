import { verify, JsonWebTokenError, sign } from "jsonwebtoken";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { IPayload } from "../../dtos/IPayload";
import auth from "../../../../../core/config/auth/auth";
import { IDateProvider } from "../../../../../shared/container/providers/DateProvider/IDateProvider";
import { DayjsDateProvider } from "../../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { UserRepositoryToken } from "../../../../user/infra/infra/repository/UserRepositoryToken";

interface ITokenResponse {
  token: string;
  refresh_token: string;
}

export class RefreshTokenUseCase {
  private dateProvider: IDateProvider = new DayjsDateProvider();
  private usersTokensRepository: UserRepositoryToken = new UserRepositoryToken();
  
  constructor() {}

  async execute(token: string): Promise<ITokenResponse> {
    let payload: IPayload;

    try {
      const decoded = verify(token, auth.secret_refresh_token);
      if (typeof decoded === "string") {
        throw new CustomException("erro", "Token de atualização inválido!");
      }
      payload = decoded as unknown as IPayload;
    } catch (error) {
      if (error instanceof JsonWebTokenError) {
        throw new CustomException("erro", "Token de atualização inválido!");
      }
      throw error;
    }

    const { email, sub } = payload;
    const user_id = sub;
    
    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(
      Number(user_id),
      token
    );

    if (!userToken) {
      throw new CustomException("erro", "O token de atualização não existe!");
    }

    await this.usersTokensRepository.deleteById(userToken.id);

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: sub.toString(),
      expiresIn: auth.expires_in_refresh_token,
    });

    const expires_date = this.dateProvider.addDays(
      auth.expires_refresh_token_days
    );

    await this.usersTokensRepository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    const newToken = sign({}, auth.secret_token, {
      subject: user_id.toString(),
      expiresIn: auth.expires_in_token,
    });

    return {
      refresh_token,
      token: newToken,
    };
  }
}
