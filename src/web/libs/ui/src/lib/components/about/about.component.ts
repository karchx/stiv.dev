import { Component } from "@angular/core";

@Component({
  selector: "ui-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"]
})
export class AboutComponent {
  currentYear = new Date().getFullYear() - 2002;

  download() {
    window.open("../../../assets/document/cv_keneth.pdf", "Download");
  }
}
