import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { AuthServiceSendForgotPassword } from '../../../domain/service/AuthSendForgotPassword.Service';

export class SendForgotPassordMailUseCase {
  authServiceSendForgotPassword: AuthServiceSendForgotPassword = new AuthServiceSendForgotPassword();
  
  constructor() {}
  
  async execute(email: string): Promise<void> {
    try {
      /**
       * Implementar validação de email
       */
      if (!email) {
        throw new CustomException("Erro", "Usuário não encontrado");
      }

      return this.authServiceSendForgotPassword.sendForgotPassword(email);
    } catch (error) {
      console.error('Erro ao executar a recuperação de senha:', error);
      throw error;
    }
  }
}

