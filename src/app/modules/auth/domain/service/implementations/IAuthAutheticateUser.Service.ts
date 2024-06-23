import { IRequest } from "../../../application/dtos/IRequest";
import { IResponse } from "../../../application/dtos/IResponse";

export interface IAuthAutheticateUserService {
  autheticate({ email, password }: IRequest): Promise<IResponse>;
}