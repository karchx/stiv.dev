import { CreateProjectDto } from "@/dtos/projects.dto";
import { ProjectService } from "@/services/project.service";
import { success, error } from "@/utils/responses";
import { Request, Response } from "express";
export class ProjectController {
  private projectService = new ProjectService();

  index = async (_: Request, res: Response) => {
    const projects = await this.projectService.allProject();
    return success(res, projects);
  };

  create = async (req: Request, res: Response) => {
    try {
      const projectData: CreateProjectDto = req.body;
      const createProjectData = await this.projectService.createProject(projectData);

      return success(res, createProjectData);
    } catch (e: any) {
      return error(res, e, 500);
    }
  };
}
