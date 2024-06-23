import { Request, Response } from "express";
import { ResponseDTO } from "../../../../../shared/dtos/ResponseDTO";
import { container } from "tsyringe";
import { SendForgotPassordMailUseCase } from "../../../interfaces/controller/SendForgotPassordMailUseCase";

export class SendForgotPasswordMailController {  
  constructor() {}

  async handle(request: Request, response: Response): Promise<Response> {
    const { email } = request.body;
    if (!email) { throw new ResponseDTO(false, "Email Inválido", SendForgotPassordMailUseCase) }
    
    const sendForgotPassordMailUseCase = container.resolve(SendForgotPassordMailUseCase);
    await sendForgotPassordMailUseCase.execute(email);

    return response.send();
  }
}