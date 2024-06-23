import { Iinteraction } from "../../../domain/entities/interfaces/IInteraction";

export interface IInteractionRepository {
  createInteraction(data: Iinteraction): Promise<Iinteraction>;
}
