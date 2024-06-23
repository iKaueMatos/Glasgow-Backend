import { AuthAutheticateUserService } from "../../../domain/services/AuthAutheticateUser.Service";
import { IRequest } from "../../../interfaces/dtos/IRequest";
import { IResponse } from "../../../interfaces/dtos/IResponse";

export class AuthenticateUserUseCase {
  private authAutheticateUserService = new AuthAutheticateUserService()

  constructor() { }
  
  async execute({ email, password }: IRequest): Promise<IResponse> {
    return this.authAutheticateUserService.autheticate({ email, password });
  }
}
