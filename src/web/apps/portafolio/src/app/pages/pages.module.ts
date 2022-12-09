import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { AboutComponent } from "../shared/about/about.component";
import { ContactComponent } from "../shared/contact/contact.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "../shared/header/header.component";
import { PagesComponent } from "./pages.component";
import { SidebarComponent } from "../shared/sidebar/sidebar.component";
import { ProjectsComponent } from "./projects/projects.component";
import { HttpClientModule } from "@angular/common/http";
import { MainComponent } from "../shared/main/main.component";
import { JtxsComponent } from "./projects/jtxs/jtxs.component";
import { DevosComponent } from "./projects/devos/devos.component";
import { LinuxComponent } from "./projects/linux/linux.component";
import { GolangComponent } from "./projects/golang/golang.component";

@NgModule({
  declarations: [
    HomeComponent,
    MainComponent,
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    ProjectsComponent,
    PagesComponent,
    JtxsComponent,
    DevosComponent,
    LinuxComponent,
    GolangComponent
  ],
  exports: [PagesComponent],
  imports: [CommonModule, RouterModule, HttpClientModule]
})
export class PagesModule {}
