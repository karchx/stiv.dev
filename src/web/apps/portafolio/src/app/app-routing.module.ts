import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./pages/home/home.component";
import { PagesRoutingModule } from "./pages/pages.routing.module";

const routes: Routes = [{ path: "", component: HomeComponent, data: { title: "Home" } }];

@NgModule({
  imports: [RouterModule.forRoot(routes), PagesRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule {}
