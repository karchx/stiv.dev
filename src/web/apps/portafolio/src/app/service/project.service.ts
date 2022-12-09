import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { map } from "rxjs/operators";

import { environment } from "../../environments/environment";
import { IProjectResponse } from "../interfaces/interfaces";
import { Project } from "../models/projects.model";

const base_url = environment.base_url;

@Injectable({
  providedIn: "root"
})
export class ProjectService {
  constructor(private _http: HttpClient) {}

  public loadProjects() {
    const url = `${base_url}/project`;
    return this._http.get<IProjectResponse>(url).pipe(
      map(resp => {
        const projects = resp.data.map(
          project =>
            new Project(
              project._id,
              project.title,
              project.description,
              project.urlGithub,
              project.tags,
              project.urlDemo,
              project.image
            )
        );

        return {
          projects
        };
      })
    );
  }
}
