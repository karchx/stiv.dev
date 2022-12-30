import {EventBus} from "../../../shared/domain/EventBus";
import {ProjectRepository} from "../domain/ProjectRepository";

export class ProjectCreator {
  constructor(private repository: ProjectRepository, private eventBus: EventBus) {}
}
