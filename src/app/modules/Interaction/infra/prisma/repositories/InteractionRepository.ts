import { IInteractionRepository } from "./IInteractionRepository";
import { Iinteraction } from "../../../domain/entities/interfaces/IInteraction";
import { Prisma } from "@prisma/client";
import prisma from "../client";
import { CustomException } from "../../../../../shared/exceptions/CustomException";

export class InteractionRepository implements IInteractionRepository {
  async createInteraction(data: Iinteraction): Promise<Iinteraction> {
    const existingPatient = await prisma.patient.findFirst({
      where: { id: data.patientId },
    });

    if (!existingPatient) {
      throw new CustomException("error", "Paciente não encontrado");
    }
    try {
      const answer = data.answer;
      if (!answer || typeof answer === undefined) {
        throw new CustomException(
          "error",
          "Falha ao Salvar Resposta no Banco de Dados",
        );
      }
      const interactionData: Prisma.InteractionCreateInput = {
        patient: {
          connect: {
            id: data.patientId,
          },
        },
        question: data.question,
        answer: data.answer!,
        timestamp: new Date(),
      };

      const createInteractions = await prisma.interaction.create({
        data: interactionData,
        include: { patient: true },
      });

      return createInteractions;
    } catch (error) {
      throw new CustomException("error", "erro ao salvar interação no banco");
    }
  }
}
