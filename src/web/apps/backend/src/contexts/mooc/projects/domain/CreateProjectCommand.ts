import { Command } from "../../../shared/domain/Command";

type Params = {
  title: string;
  description: string;
  github: string;
  deploy?: string;
  image?: string;
};

export class CreateProjectCommand extends Command {
  title: string;
  description: string;
  github: string;

  constructor({ title, description, github }: Params) {
    super();
    this.title = title;
    this.description = description;
    this.github = github;
  }
}
