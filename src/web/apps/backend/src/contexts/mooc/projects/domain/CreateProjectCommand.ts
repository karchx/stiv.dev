type Params = {
  name: string;
  description: string;
  github: string;
  deploy?: string;
  image?: string;
};

export class CreateProjectCommand {
  name: string;
  description: string;
  github: string;

  constructor({ name, description, github }: Params) {
    this.name = name;
    this.description = description;
    this.github = github;
  }
}
