import { Component, OnDestroy, OnInit } from "@angular/core";
import { Subscription } from "rxjs";
import { delay } from "rxjs/operators";
import { ModalService } from "../../../services/modal.service";
import { Project } from "../../../models/projects.model";
import { ProjectService } from "../../../service/project.service";

@Component({
  selector: "app-jtxs",
  templateUrl: "./jtxs.component.html",
  styles: []
})
export class JtxsComponent implements OnInit, OnDestroy {
  public projects: Project[] = [];
  public imgSubs!: Subscription;

  constructor(
    private _projectService: ProjectService,
    private _modalService: ModalService
  ) {}

  ngOnDestroy() {
    this.imgSubs.unsubscribe();
  }

  ngOnInit(): void {
    this.getProjects();
    this.imgSubs = this._modalService.newImg
      .pipe(delay(100))
      .subscribe(() => this.getProjects());
  }

  public getProjects() {
    this._projectService.loadProjects().subscribe(({ projects }) => {
      this.projects = projects.filter(c => c.tags.includes("js"));
    });
  }
}
