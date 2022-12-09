import { Project } from "../models/projects.model";

export interface IProjectResponse {
  messageStatus: string;
  data: Array<Project>;
  status: number;
}
