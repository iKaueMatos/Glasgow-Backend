import { Request, Response } from "express";
import { ResetPasswordUserUseCase } from "../../application/useCases/resetPasswordUser/ResetPasswordUserUseCase";

export class ResetPasswordUserController {
  resetPasswordUserUseCase: ResetPasswordUserUseCase = new ResetPasswordUserUseCase();

  async handle(request: Request, response: Response): Promise<Response> {
    const { token } = request.query;
    const { password } = request.body;

    await this.resetPasswordUserUseCase.execute({ token: String(token), password });
    return response.send();
  }
}
