import { Command } from "../../../shared/domain/Command";

type Params = {
  id: string;
  title: string;
  description: string;
  github: string;
  deploy?: string;
  image?: string;
};

export class CreateProjectCommand extends Command {
  id: string;
  title: string;
  description: string;
  github: string;

  constructor({ id, title, description, github }: Params) {
    super();
    this.id = id;
    this.title = title;
    this.description = description;
    this.github = github;
  }
}
