import { AuthAutheticateUserService } from "../../../domain/service/AuthAutheticateUser.Service";
import { IRequest } from "../../dtos/IRequest";
import { IResponse } from "../../dtos/IResponse";

export class AuthenticateUserUseCase {
  private authAutheticateUserService = new AuthAutheticateUserService()

  constructor() { }
  
  async execute({ email, password }: IRequest): Promise<IResponse> {
    return this.authAutheticateUserService.autheticate({ email, password });
  }
}
