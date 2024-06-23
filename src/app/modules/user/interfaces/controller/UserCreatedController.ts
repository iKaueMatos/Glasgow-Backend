import { Request, Response } from "express";
import { container } from "tsyringe";
import { UserCreatedUseCase } from "../../application/useCases/userCreated/UserCreatedUseCase";

export class UserCreatedController {
  async handle(request: Request, response: Response): Promise<Response> {
    try {
      const { name, email, password } = request.body;
      const userCreatedUseCase = container.resolve(UserCreatedUseCase);

      await userCreatedUseCase.execute({
        name,
        email,
        password,
      });

      return response.status(201).send();
    } catch (error) {
      console.error(error);
      return response.status(500).json({ error: `${error}` });
    }
  }
}