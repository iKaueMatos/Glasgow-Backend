import { resolve } from "path";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { DayjsDateProvider } from "../../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { UserRepository } from '../../../../user/infra/infra/repository/UserRepository';
import { UserRepositoryToken } from "../../../../user/infra/infra/repository/UserRepositoryToken";
import { AuthServiceSendForgotPassword } from '../../../domain/service/AuthServiceSendForgotPassword';

export class SendForgotPassordMailUseCase {
  constructor(private authServiceSendForgotPassword: AuthServiceSendForgotPassword) {}
  
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

