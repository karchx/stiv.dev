import {ContainerBuilder} from "node-dependency-injection";
import {DomainEvent} from "../../domain/DomainEvent";
import {DomainEventSubscriber} from "../../domain/DomainEventSubscriber";

export class DomainEventSubscribers {
  constructor(public items: DomainEventSubscriber<DomainEvent>[]) {}

  static from(container: ContainerBuilder): DomainEventSubscribers {
    const subscriberDefinitions = container.findTaggedServiceIds('domainEventSubscriber');
    const subscribers: DomainEventSubscriber<DomainEvent>[] = [];

    subscriberDefinitions.forEach((_, key: string) => {
      const domainEventSubscriber = container.get<DomainEventSubscriber<DomainEvent>>(key.toString());
      subscribers.push(domainEventSubscriber);
    });

    return new DomainEventSubscribers(subscribers);
  }
}
