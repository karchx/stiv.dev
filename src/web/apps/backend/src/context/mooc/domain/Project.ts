interface ProjectParams {
  id: string
  title: string;
  description: string;
  github: string;
  tags: string[];
  web?: string;
}

export class Project {
  readonly id: string;
  readonly title: string;
  readonly description: string;
  readonly github: string;
  readonly web: string;
  readonly tags: string[];

  constructor(params: ProjectParams) {
    this.id = params.id;
    this.title = params.title;
    this.description = params.description;
    this.github = params.github;
    this.web = params.web || "";
    this.tags = params.tags;
  }
}
