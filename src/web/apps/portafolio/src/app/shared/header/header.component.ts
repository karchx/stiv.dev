import { Component } from "@angular/core";
import { Router } from "@angular/router";
import { MenuService } from "../../service/menu/menu.service";

@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styles: []
})
export class HeaderComponent {
  constructor(private menuService: MenuService, public router: Router) {}

  isOpen: boolean = true;
  isOpenHeader: boolean = true;

  menu() {
    this.isOpen = this.menuService.isOpenMenu();
  }

  menuHeader() {
    this.isOpenHeader = !this.isOpenHeader;
  }
}
