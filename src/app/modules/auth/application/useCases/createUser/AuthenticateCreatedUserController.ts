import { Request, Response } from "express";
import { container } from "tsyringe";
import { AutheticateUserUseCase } from "./AutheticateCreatedUserUseCase";

export class AutheticateCreatedUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password } = request.body;
    const autheticateUserUseCase = container.resolve(AutheticateUserUseCase);
    
    await autheticateUserUseCase.execute({
      name,
      email,
      password,
    });

    return response.status(201).send();
  }
}