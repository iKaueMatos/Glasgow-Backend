import { ITokenRequest } from "../../dtos/IToken";
import { AuthResetPasswordService } from "../../../domain/service/AuthResetPassword.Service";

export class ResetPasswordUserUseCase {
  authResetPasswordService : AuthResetPasswordService = new AuthResetPasswordService();

  async execute({ token, password }: ITokenRequest): Promise<void> {
    return this.authResetPasswordService.resetPasswordIsRefleshToken({ token, password });
  }
}
