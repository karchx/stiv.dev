import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule } from "@angular/router";

import { HeaderComponent } from "./header/header.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { AboutComponent } from "./about/about.component";
import { ContactComponent } from "./contact/contact.component";
import { MainComponent } from "./main/main.component";

@NgModule({
  declarations: [
    HeaderComponent,
    SidebarComponent,
    AboutComponent,
    ContactComponent,
    MainComponent
  ],
  exports: [],
  imports: [CommonModule, RouterModule]
})
export class SharedModule {}
