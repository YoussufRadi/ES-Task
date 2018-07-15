import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup } from "@angular/forms";
import { DialogService } from "ng2-bootstrap-modal";
import { ActivatedRoute, Router } from "@angular/router";
import * as moment from "moment";

import { TextModalComponent } from "../../core/text-modal/text-modal.component";
import { ApiManagerService } from "../../core/services/api-manager.service";
@Component({
  selector: "app-edit-todo",
  templateUrl: "./edit-todo.component.html",
  styleUrls: ["./edit-todo.component.css"]
})
export class EditTodoComponent implements OnInit {
  editForm: FormGroup;
  data = { id: 1, subject: "", comment: "", date: "" };
  constructor(
    private fb: FormBuilder,
    private api: ApiManagerService,
    private dialogService: DialogService,
    private router: ActivatedRoute,
    private navigator: Router
  ) {}

  showError(title, message) {
    let disposable = this.dialogService.addDialog(TextModalComponent, {
      title: title,
      message: message
    });
  }

  ngOnInit() {
    this.editForm = this.fb.group({
      subject: [""],
      comment: [""],
      date: [""]
    });
    this.api
      .getItem(this.router.snapshot.params.id)
      .then((data: any) => {
        this.data = data.todo;
        // this.editForm.value.subject = data.subject;
        this.editForm.setValue({
          subject: this.data.subject,
          comment: this.data.comment,
          date: moment(this.data.date).format("YYYY-MM-DD")
        });
      })
      .catch(err => {
        console.log(err);
        this.showError("Fetch Failed", err);
      });
  }

  get subject() {
    return this.editForm.get("subject");
  }

  get comment() {
    return this.editForm.get("comment");
  }

  get date() {
    return this.editForm.get("date");
  }

  public onFormSubmit() {
    this.api
      .edit(
        {
          subject: this.editForm.value.subject,
          comment: this.editForm.value.comment,
          date: this.editForm.value.date
        },
        this.router.snapshot.params.id
      )
      .then((data: any) => {
        this.showError("Edited Successfully", "Todo has been edited");
        this.navigator.navigate(["pannel", "dashboard"]);
      })
      .catch(err => {
        console.log(err);
        this.showError("Edit Failed", err);
      });
  }
}
