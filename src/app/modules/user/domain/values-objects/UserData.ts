import { hash } from "bcrypt";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { ICreateUserDTO } from "../../application/dtos/ICreatedUserDTO";

export class UserData {
  name: string;
  email: string;
  passwordHash: string = '';

  constructor({ name, email, password }: ICreateUserDTO) {
    this.validateName(name);
    this.validateEmail(email);
    this.name = name.trim();
    this.email = email.trim().toLowerCase();

    this.hashPassword(password)
      .then((hashedPassword) => {
        this.passwordHash = hashedPassword;
      })
      .catch((error) => {
        throw new CustomException('Erro ao criar usuário', 'Erro ao processar a senha');
      });
  }

  private validateName(name: string): void {
    if (!name || name.trim() === '') {
      throw new CustomException('Erro de validação', 'Nome do usuário é obrigatório');
    }
  }

  private validateEmail(email: string): void {
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      throw new CustomException('Erro de validação', 'Email inválido');
    }
  }

  private async hashPassword(password: string): Promise<string> {
    return await hash(password, 8);
  }
}