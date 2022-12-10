import { Component } from "@angular/core";
import { Router } from "@angular/router";

import { MenuService } from "../../services/menu.service";
import { LinkTreeService } from "@libs/ui-shell"

@Component({
  selector: "ui-navbar",
  templateUrl: "./navbar.component.html",
  styleUrls: ["./navbar.component.css"]
})
export class NavbarComponent {

  links$ = this.linkTreeService.getLinks();

  constructor(
    private menuService: MenuService,
    private linkTreeService: LinkTreeService,
    public router: Router
  ) {}

  isOpen: boolean = true;
  isOpenHeader: boolean = true;

  menu() {
    this.isOpen = this.menuService.isOpenMenu();
  }

  menuHeader() {
    this.isOpenHeader = !this.isOpenHeader;
  }

}
