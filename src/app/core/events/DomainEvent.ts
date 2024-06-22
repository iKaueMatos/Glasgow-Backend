export interface DomainEvent {
  occurredOn: Date;
  getEventName(): string;
}