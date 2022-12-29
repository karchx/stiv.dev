import {MongoRepositroy} from "apps/backend/src/contexts/shared/infrastructure/persistence/mongo/MongoRepository";
import {Project} from "../../domain/Project";
import {ProjectRepository} from "../../domain/ProjectRepository";

interface ProjectDocument {
  _id: string;
  title: string;
  description: string;
  github: string;
  deploy?: string;
  image?: string;
}

export class MongoProjectRepository extends MongoRepositroy<Project> implements ProjectRepository {
  public save(project: Project): Promise<void> {
    return this.persist(project.id, project);
  }

  protected collectionName(): string {
    return 'projects';
  }
}
