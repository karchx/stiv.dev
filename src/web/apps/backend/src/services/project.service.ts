import {CreateProjectDto} from '@/dtos/projects.dto';
import {HttpException} from '@/exceptions/HttpException';
import {Project} from '@/interfaces/projects.interface';
import {isEmpty} from '@/utils/helpers';
import projectModel from '@models/projects.model';

export class ProjectService {
  private projects = projectModel;

  async allProject(): Promise<Project[]> {
    return this.projects.find();
  }

  async createProject(projectData: CreateProjectDto): Promise<Project> {
    if (isEmpty(projectData)) throw new HttpException(400, 'projectData is empty');
    return await this.projects.create({...projectData});
  }
}
