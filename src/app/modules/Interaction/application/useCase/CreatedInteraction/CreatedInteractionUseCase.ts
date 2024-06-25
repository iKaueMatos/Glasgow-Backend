import OpenAI from "openai";
import { Iinteraction } from "../../../domain/entities/interfaces/IInteraction";
import { CreateInteractionDTO } from "../../dtos/CreateInteractionDTO";
import { CustomException } from "../../../../../shared/exceptions/CustomException";
import { InteractionRepository } from "../../../infra/prisma/repositories/InteractionRepository";
import { container } from "tsyringe";

const openai = new OpenAI({
  apiKey: process.env.API_KEY,
});

export class CreatedInteractionUseCase {
  async execute(data: Iinteraction): Promise<CreateInteractionDTO> {
    const interactionRepository = container.resolve(InteractionRepository);
    const question = data.question;
    const timestamp = new Date();
    const completion = await openai.chat.completions.create({
      messages: [{ role: "user", content: question }],
      model: "gpt-3.5-turbo",
    });

    const answer = completion.choices[0].message.content;
    if (!answer) {
      throw new CustomException("error", "Falha ao buscar uma resposta na IA");
    }

    const interactionData: Iinteraction = {
      id: data.id,
      patientId: data.patientId,
      question: question,
      timestamp: timestamp,
      answer: answer,
    };

    const interaction =
      await interactionRepository.createInteraction(interactionData);

    return interaction;
  }
}
