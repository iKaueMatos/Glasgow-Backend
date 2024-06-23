import { Request, Response } from "express";
import { CreatedInteractionUseCase } from "../../../application/useCase/CreatedInteraction/CreatedInteractionUseCase";
import { InteractionRepository } from "../../../infra/prisma/repositories/InteractionRepository";
import { CustomException } from "../../../../../shared/exceptions/CustomException";

export class CreatedInteractionController {
  static async handle(req: Request, res: Response): Promise<void> {
    try {
      const { patientId, question } = req.body;
      const interactionRepository = new InteractionRepository();
      const createdInteractionUseCase = new CreatedInteractionUseCase(
        interactionRepository,
      );

      const interaction = await createdInteractionUseCase.execute({
        patientId,
        question,
      });

      res.status(201).json(interaction);
    } catch (e) {
      const error = new CustomException(
        "error",
        "Erro ao realizar a pergunta, por favor tente novamente mais tarde",
      );
      res.status(500).json({
        message: error.message,
      });
    }
  }
}
