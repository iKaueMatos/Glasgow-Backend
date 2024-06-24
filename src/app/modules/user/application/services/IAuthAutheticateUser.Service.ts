import { IRequest } from "../../interfaces/dtos/IRequest";
import { IResponse } from "../../interfaces/dtos/IResponse";

export interface IAuthAutheticateUserService {
  authenticate({ email, password }: IRequest): Promise<IResponse>;
}