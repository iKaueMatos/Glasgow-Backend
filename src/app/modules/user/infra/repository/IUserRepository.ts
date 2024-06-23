import { ICreateUserDTO } from "../../application/dtos/ICreatedUserDTO";
import { IUser } from "../../domain/entities/interfaces/IUser";

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  create(user: ICreateUserDTO): Promise<IUser>;
  update(user: IUser): Promise<IUser | null>;
  findById(id: number): Promise<IUser | null>;
  deleteById(id: number): Promise<void>;
}