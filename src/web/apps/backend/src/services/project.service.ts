import {CreateProjectDto} from '@/dtos/projects.dto';
import {Project} from '@/interfaces/projects.interface';
import projectModel from '@models/projects.model';

export class ProjectService {
  private projects = projectModel;

  async createProject(projectData: CreateProjectDto): Promise<Project> {
    return await this.projects.create({...projectData});
  }
}
