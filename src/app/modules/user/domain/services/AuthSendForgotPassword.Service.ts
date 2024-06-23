import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { UserRepository } from "../../infra/repository/UserRepository";
import { UserRepositoryToken } from "../../infra/repository/UserRepositoryToken";
import { resolve } from 'path';
import { randomUUID } from 'crypto';
import { EtherealMailProvider } from "../../../../shared/container/providers/MailProvider/implementations/EtherealMailProvider";
import { container } from "tsyringe";

export class AuthServiceSendForgotPassword {
  dateProvider: DayjsDateProvider = new DayjsDateProvider();
  mailProvider: EtherealMailProvider = new EtherealMailProvider;
  
  async sendForgotPassword(email: string): Promise<void> {
    try {
      const userRepository = container.resolve(UserRepository);
      const user = await userRepository.findByEmail(email);
  
      if (!user) {
        throw new CustomException("Erro", "Usuário não encontrado");
      }
  
      const token = randomUUID();
      const expiresDate = this.dateProvider.addHours(3);
      await this.createPasswordResetToken(token, user.id, expiresDate);
      const forgotPasswordUrl = `${process.env.FORGOT_MAIL_URL}${token}`;
  
      await this.sendForgotPasswordEmail(email, user.name, forgotPasswordUrl);
    } catch (error) {
      console.error('Erro ao executar a recuperação de senha:', error);
      throw error;
    }
  }

  private async createPasswordResetToken(token: string, userId: number, expiresDate: Date): Promise<void> {
    const userTokenRepository = container.resolve(UserRepositoryToken);
    await userTokenRepository.create({
      refresh_token: token,
      user_id: userId,
      expires_date: expiresDate,
    });
  }
  
  private async sendForgotPasswordEmail(email: string, userName: string, forgotPasswordUrl: string): Promise<void> {
    const templatePath = resolve(__dirname, "..", "..", "views", "emails", "forgotPassword.hbs");
  
    const variables = {
      name: userName,
      link: forgotPasswordUrl,
    };
  
    await this.mailProvider.sendMail(
      email,
      "Recuperação de Senha",
      variables,
      templatePath
    );
  }
}