import { IRequest } from "../../interfaces/dtos/IRequest";
import { IResponse } from "../../interfaces/dtos/IResponse";

export interface IAuthAutheticateUserService {
  autheticate({ email, password }: IRequest): Promise<IResponse>;
}