import { Request, Response } from "express";
import { SendForgotPassordMailUseCase } from './SendForgotPassordMailUseCase';
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";

export class SendForgotPasswordMailController {
  sendForgotPassordMailUseCase = new SendForgotPassordMailUseCase();
  
  constructor() {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    if (!email) { throw new ResponseDTO(false, "Email Inválido", SendForgotPassordMailUseCase) }
    
    await this.sendForgotPassordMailUseCase.execute(email);

    return response.send();
  }
}