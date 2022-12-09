import { Component, OnInit } from "@angular/core";
import { ModalService } from "../../services/modal.service"; //FIX: delete a file services

interface HTMLInputEvent extends Event {
  target: HTMLInputElement & EventTarget;
}
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styles: []
})
export class ModalComponent implements OnInit {
  public imgTemp: any;
  public event!: HTMLInputEvent;

  constructor(public modalService: ModalService) {}

  ngOnInit(): void {}

  cerrarModal() {
    this.modalService.closeModal();
    //TODO: set null
  }

  cambiarImagen(file: File) {
    if (!file) {
      this.imgTemp = null;
    }

    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      this.imgTemp = reader.result;
    };
  }
}
