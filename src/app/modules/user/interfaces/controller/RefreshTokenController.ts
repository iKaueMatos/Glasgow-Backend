import { Request, Response } from "express";
import { container } from "tsyringe";
import { RefreshTokenUseCase } from "../../application/useCases/refleshToken/RefreshTokenUseCase";

export class RefreshTokenController {
  async handle(request: Request, response: Response): Promise<Response> {
    const token =
      request.body.token ||
      request.headers["x-access-token"] ||
      request.query.token;

    const refleshTokenUseCase = container.resolve(RefreshTokenUseCase)
    const refresh_token = await refleshTokenUseCase.execute(token);
    return response.json(refresh_token);
  }
}