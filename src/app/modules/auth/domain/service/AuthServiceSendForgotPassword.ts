import { DayjsDateProvider } from "../../../../shared/container/providers/DateProvider/implementations/DayjsDateProvider";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { UserRepository } from "../../../user/infra/infra/repository/UserRepository";
import { UserRepositoryToken } from "../../../user/infra/infra/repository/UserRepositoryToken";
import { resolve } from 'path';
import { UUID as uuidV4, UUID, randomUUID } from 'crypto';
import { EtherealMailProvider } from "../../../../shared/container/providers/MailProvider/implementations/EtherealMailProvider";
import { MailProviderInMemory } from "../../../../shared/container/providers/MailProvider/in-memory/MailProviderInMemory";

export class AuthServiceSendForgotPassword {
  dateProvider: DayjsDateProvider = new DayjsDateProvider();
  usersRepository: UserRepository = new UserRepository();
  usersRepositoryToken: UserRepositoryToken = new UserRepositoryToken();
  mailProvider: EtherealMailProvider = new EtherealMailProvider;
  
  async sendForgotPassword(email: string): Promise<void> {
    try {
      const user = await this.usersRepository.findByEmail(email);
  
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
    await this.usersRepositoryToken.create({
      refreshToken: token,
      userId: userId,
      expiresDate: expiresDate,
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