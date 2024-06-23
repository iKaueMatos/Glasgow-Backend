import { UserTokens } from "@prisma/client";
import { ITokenData } from "../../application/dtos/ITokenData";
import { IUserToken } from "../../domain/entities/interfaces/IUserToken";

export interface IUserRepositoryToken {
  create(tokenData: ITokenData): Promise<void>;
  findByUserIdAndRefreshToken(userId: number, refreshToken: string): Promise<IUserToken | null>;
  findByRefreshToken(refleshToken: string): Promise<IUserToken | null>;
  deleteById(id: number): Promise<void>;
  findById(id: number): Promise<UserTokens | null>;
}