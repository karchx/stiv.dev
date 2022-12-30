import {AggregateRoot} from "../../../shared/domain/AggregateRoot";
import {ProjectCreatedDomainEvent} from "../domain/ProjectCreatedDomainEvent";

export class Project extends AggregateRoot {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly github: string;

  constructor(id: string, title: string, description: string, github: string) {
    super();
    this.id = id;
    this.title = title;
    this.description = description;
    this.github = github;
  }

  static create(id: string, title: string, description: string, github: string): Project {
    const project = new Project(id, title, description, github);

    project.record(
      new ProjectCreatedDomainEvent({
        aggregateId: project.id,
        title: project.title,
        description: project.description,
        github: project.github
      })
    )

    return project;
  }

  toPrimitives() {
    return {
      id: this.id,
      title: this.title,
      description: this.description,
      github: this.github
    }
  }
}
