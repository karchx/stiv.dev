import { Component } from "@angular/core";
@Component({
  selector: "app-main",
  templateUrl: "./main.component.html",
  styles: []
})
export class MainComponent {
  download() {
    window.open("../../../assets/document/cv_keneth.pdf", "Download");
  }
}
