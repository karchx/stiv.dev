import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { PagesModule } from "./pages/pages.module";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./components/modal/modal.component";

@NgModule({
  declarations: [AppComponent, ModalComponent],
  imports: [BrowserModule, AppRoutingModule, PagesModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
