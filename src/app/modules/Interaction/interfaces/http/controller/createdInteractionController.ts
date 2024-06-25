import { Request, Response } from "express";
import { CreatedInteractionUseCase } from "../../../application/useCase/CreatedInteraction/CreatedInteractionUseCase";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { container } from "tsyringe";

export class CreatedInteractionController {
  static async handle(req: Request, res: Response): Promise<void> {
    try {
      const { patientId, question } = req.body;

      if (!patientId || !question) {
           res.status(400).json({
          message: "ID do paciente e pergunta são obrigatórios",
        });
        return;
      }

      const patientIdStr = Number(patientId);
      const createdInteractionUseCase = container.resolve(CreatedInteractionUseCase)
      const interaction = await createdInteractionUseCase.execute({
        patientId: patientIdStr,
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
