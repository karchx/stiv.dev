import { EventEmitter, Injectable } from "@angular/core";
import { environment } from "../../environments/environment";

const base_url = environment.base_url;

@Injectable({
  providedIn: "root"
})
export class ModalService {
  private _hiddenModal: boolean = true;
  public img!: string;

  public newImg: EventEmitter<string> = new EventEmitter<string>();

  get hiddenModal() {
    return this._hiddenModal;
  }

  openModal(img: string = "no-image") {
    this._hiddenModal = false;

    this.img = img;
    console.log(this.img);
  }

  closeModal() {
    this._hiddenModal = true;
  }

  constructor() {}
}
