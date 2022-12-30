import {DomainEventSubscribers} from "../infrastructure/eventBust/DomainEventSubscribers";
import {DomainEvent} from "./DomainEvent";

export interface EventBus {
  publish(events: DomainEvent[]): Promise<void>;
  addSubscribers(subscribers: DomainEventSubscribers): void;
}
