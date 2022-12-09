import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

//import { HomeComponent } from './home/home.component';
//import { PagesComponent } from './pages.component';
import { JtxsComponent } from "./projects/jtxs/jtxs.component";

//TODO: eliminar project component
//import { ProjectsComponent } from './projects/projects.component';

const childRoute: Routes = [
  //{ path: '', component: HomeComponent, data: { title: 'Home' } },
  {
    path: "jtxs",
    component: JtxsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(childRoute)],
  exports: [RouterModule]
})
export class ChildRouteModule {}
