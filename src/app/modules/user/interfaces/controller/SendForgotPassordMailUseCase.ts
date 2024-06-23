
import { container } from "tsyringe";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { AuthServiceSendForgotPassword } from "../../domain/services/AuthSendForgotPassword.Service";

export class SendForgotPassordMailUseCase {  
  constructor() {}
  
  async execute(email: string): Promise<void> {
    try {
      /**
       * Implementar validação de email
       */
      if (!email) {
        throw new CustomException("Erro", "Usuário não encontrado");
      }
      
      const authServiceSendForgotPassword = container.resolve(AuthServiceSendForgotPassword);
      return authServiceSendForgotPassword.sendForgotPassword(email);
    } catch (error) {
      console.error('Erro ao executar a recuperação de senha:', error);
      throw error;
    }
  }
}

