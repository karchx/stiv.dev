import { environment } from "../../environments/environment";
const base_url = environment.base_url;

export class Project {
  constructor(
    public _id: string,
    public title: string,
    public description: string,
    public urlGithub: string,
    public tags: Array<string>,
    public urlDemo: string,
    public image: string
  ) {}

  // [deprecate]
  get _imageUrl() {
    if (!this.image) {
      return `${base_url}/project/return/no-img.jpg`;
    } else {
      console.log(`${base_url}/project/return/${this._id}`);
      return `${base_url}/project/return/${this._id}`;
    }
  }
}
