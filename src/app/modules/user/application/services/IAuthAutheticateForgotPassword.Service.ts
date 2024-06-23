export interface IAuthAutheticateForgotPasswordService {
  sendForgotPasswordEmail(email: string, userName: string, forgotPasswordUrl: string): Promise<void>;
  createPasswordResetToken(token: string, userId: number, expiresDate: Date): Promise<void>;
  sendForgotPassword(email: string): Promise<void>;
}