import { hash } from "bcryptjs";
import { CustomException } from "../../../../shared/exceptions/CustomException";
import { ICreateUserDTO } from "../../application/dtos/ICreatedUserDTO";

export class UserData {
  name: string;
  email: string;
  passwordHash: string;
  phone: string;

  private constructor({ name, email, passwordHash, phone }: { name: string; email: string; passwordHash: string; phone: string }) {
    this.validateName(name);
    this.validateEmail(email);
    this.name = name.trim();
    this.phone = phone.trim();
    this.email = email.trim().toLowerCase();
    this.passwordHash = passwordHash;
  }

  static async create({ name, email, password, phone }: ICreateUserDTO): Promise<UserData> {
    const passwordHash = await hash(password, 8);
    return new UserData({ name, email, passwordHash, phone });
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
}