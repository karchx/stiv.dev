import {DomainEvent} from "../../../shared/domain/DomainEvent";

type CreateProjectDomainEventAttributes = {
  readonly title: string;
  readonly description: string;
  readonly github: string;
}

export class ProjectCreatedDomainEvent extends DomainEvent {
  static readonly EVENT_NAME = 'project.created';

  readonly title: string;
  readonly description: string;
  readonly github: string;

  constructor({
    aggregateId,
    title,
    description,
    github,
    eventId,
    occurredOn
  }: {
    aggregateId: string;
    title: string;
    description: string;
    github: string;
    eventId?: string;
    occurredOn?: Date;
  }) {
    super({eventName: ProjectCreatedDomainEvent.EVENT_NAME, aggregateId, eventId, occurredOn});
    this.title = title;
    this.description = description;
    this.github = github;
  }

  toPrimitives() {
    const {title, description, github} = this;
    return {
      title,
      description,
      github
    }
  }

  static fromPrimitives(params: {
    aggregateId: string;
    attributes: CreateProjectDomainEventAttributes;
    eventId: string;
    occurredOn: Date;
  }): DomainEvent {
    const {aggregateId, attributes, occurredOn, eventId} = params;
    return new ProjectCreatedDomainEvent({
      aggregateId,
      title: attributes.title,
      description: attributes.description,
      github: attributes.github,
      eventId, occurredOn
    });
  };
}
