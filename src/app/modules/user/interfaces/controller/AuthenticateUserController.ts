import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "../../application/useCases/autheticateUser/AutheticateUserUseCase";

export class AuthenticateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { email, password } = request.body;

    const authenticateUserUseCase = new AuthenticateUserUseCase();
    const token = await authenticateUserUseCase.execute({
      password,
      email,
    });

    return response.json(token);
  }
}