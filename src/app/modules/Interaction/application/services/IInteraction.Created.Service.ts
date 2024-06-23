import { Iinteraction } from "../../domain/entities/interfaces/IInteraction";

export interface IInteractionCreatedService {
  createInteraction(data: Iinteraction): Promise<Iinteraction>;
}
