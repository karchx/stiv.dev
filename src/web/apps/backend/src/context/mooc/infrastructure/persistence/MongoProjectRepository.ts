import {Project} from "../../domain/Project";
import {ProjectRepository} from "../../domain/ProjectRepository";

export class MongoProjectRepository implements ProjectRepository {
  async save(project: Project): Promise<void> {
    return new Promise((resolve) => {
      console.log(`Project #${project.id} guardado, meta<${project}>`);
      resolve();
    });
  }
}
