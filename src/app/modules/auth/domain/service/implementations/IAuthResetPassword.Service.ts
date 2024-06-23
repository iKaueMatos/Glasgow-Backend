import { ITokenRequest } from "../../../application/dtos/IToken";

export interface IAuthResetPasswordService {
  resetPassword(userToken: { user_id: number; id: number }, newPassword: string): Promise<void>;
  resetPasswordIsRefleshToken({ token, password }: ITokenRequest): Promise<void> ;
}