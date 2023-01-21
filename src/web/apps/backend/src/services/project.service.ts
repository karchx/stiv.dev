import {Project} from '@/interfaces/projects.interface';
import projectModel from '@models/projects.model';

export class ProjectService {
  private projects = projectModel;

  async createProject(projectData): Promise<Project> {
    return await this.projects.create({...projectData});
  }
}
