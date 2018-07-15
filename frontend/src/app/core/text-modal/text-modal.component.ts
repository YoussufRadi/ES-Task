import { Component, OnInit } from "@angular/core";
import { DialogComponent, DialogService } from "ng2-bootstrap-modal";

export interface ErrorModel {
  title: string;
  message: string;
}

@Component({
  selector: "app-text-modal",
  templateUrl: "./text-modal.component.html",
  styleUrls: ["./text-modal.component.css"]
})
export class TextModalComponent extends DialogComponent<ErrorModel, boolean>
  implements OnInit, ErrorModel {
  title: string;
  message: string;
  constructor(dialogService: DialogService) {
    super(dialogService);
  }
  ngOnInit() {}
}
