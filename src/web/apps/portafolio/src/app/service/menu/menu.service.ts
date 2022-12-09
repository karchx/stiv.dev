import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class MenuService {
  constructor() {}

  isOpen: boolean = true;

  isOpenMenu(): boolean {
    this.isOpen = !this.isOpen;
    return this.isOpen;
  }
}
