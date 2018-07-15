import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "node_modules/ng2-bootstrap-modal";

import { TextModalComponent } from "../../core/text-modal/text-modal.component";
import { ApiManagerService } from "../../core/services/api-manager.service";
@Component({
  selector: "app-add-todo",
  templateUrl: "./add-todo.component.html",
  styleUrls: ["./add-todo.component.scss"]
})
export class AddTodoComponent implements OnInit {
  addForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiManagerService,
    private dialogService: DialogService
  ) {}

  showError(title, message) {
    let disposable = this.dialogService.addDialog(TextModalComponent, {
      title: title,
      message: message
    });
  }

  ngOnInit() {
    this.addForm = this.fb.group({
      subject: ["", [Validators.required]],
      comment: ["", [Validators.required]],
      date: ["", [Validators.required]]
    });
  }

  get subject() {
    return this.addForm.get("subject");
  }

  get comment() {
    return this.addForm.get("comment");
  }

  get date() {
    return this.addForm.get("date");
  }

  public onFormSubmit() {
    this.api
      .add({
        subject: this.addForm.value.subject,
        comment: this.addForm.value.comment,
        date: this.addForm.value.date
      })
      .then((data: any) => {
        this.addForm.reset();
        this.showError("Add Successfully", "Todo has been added");
      })
      .catch(err => {
        console.log(err);
        this.showError("Add Failed", err);
      });
  }
}
