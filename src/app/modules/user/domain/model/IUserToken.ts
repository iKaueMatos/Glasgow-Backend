import { IUser } from "./IUser";

export interface IUserToken {
  id: number;
  refreshToken: string;
  userId: number;
  expiresDate: Date;
  createdAt: Date;

  user: IUser;
}
