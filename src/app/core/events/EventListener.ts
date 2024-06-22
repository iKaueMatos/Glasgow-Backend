import { DomainEvent } from "./DomainEvent";

export interface EventListener {
  handle(event: DomainEvent): void;
}