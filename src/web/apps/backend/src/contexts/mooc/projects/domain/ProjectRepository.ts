import {Project} from "./Project";

export interface ProjectRepository {
  save(project: Project): Promise<void>;
  // searchAll(): Promise<Project[]>
}
