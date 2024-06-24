import { container } from "tsyringe";
import { HttpStatus } from "../../../../../shared/utils/enum/HttpStatusEnum";
import { AuthAuthenticateUserService } from "../../../domain/services/AuthAutheticateUser.Service";
import { IRequest } from "../../../interfaces/dtos/IRequest";
import { IResponse } from "../../../interfaces/dtos/IResponse";

export class AuthenticateUserUseCase {
  constructor() { }
  
  async execute({ email, password }: IRequest): Promise<IResponse> {
    try {
      const authAutheticateUserService = container.resolve(AuthAuthenticateUserService);
      const response = await authAutheticateUserService.authenticate({ email, password });
  
      const responseData: IResponse = {
        user: response.user,
        status: HttpStatus.OK,
        token: response.token,
        refresh_token: response.refresh_token,
        error: '',
        data: response.data,
      };
  
      return responseData;
    } catch (error) {
      console.error('Erro ao autenticar usuário:', error);
  
      const errorResponse: IResponse = {
        user: { name: '', email: '' },
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        token: '',
        refresh_token: '',
        error: 'Falha ao autenticar usuário',
      };
  
      return errorResponse;
    }
  }
  
}
