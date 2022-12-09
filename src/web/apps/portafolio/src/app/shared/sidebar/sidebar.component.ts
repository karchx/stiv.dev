import { Component } from "@angular/core";
import { MenuService } from "../../service/menu/menu.service";

interface ISidebar {
  item: string;
  icon: string;
  page: string;
}

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styles: []
})
export class SidebarComponent {
  constructor(public menuService: MenuService) {}
  menuSidebar: Array<ISidebar> = [
    {
      item: "C/C++",
      icon: "fa-solid fa-microchip",
      page: ""
    },
    {
      item: "Javascript/Typescript",
      icon: "fa-brands fa-node-js",
      page: "jtxs"
    },
    {
      item: "Golang",
      icon: "fa-brands fa-golang",
      page: ""
    },
    {
      item: "Linux config and more",
      icon: "fa-brands fa-linux",
      page: ""
    }
  ];
}
