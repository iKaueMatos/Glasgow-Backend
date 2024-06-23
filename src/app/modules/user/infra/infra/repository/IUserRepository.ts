import { ICreateUserDTO } from "../../../../auth/application/dtos/ICreatedUserDTO";
import { IUser } from "../../../domain/model/IUser";

export interface IUserRepository {
  findByEmail(email: string): Promise<IUser | null>;
  create(user: ICreateUserDTO): Promise<IUser>;
  update(user: IUser): Promise<IUser | null>;
  findById(id: number): Promise<IUser | null>;
  deleteById(id: number): Promise<void>;
}