import { Component, OnInit } from "@angular/core";
import { DialogService } from "node_modules/ng2-bootstrap-modal";

import { TextModalComponent } from "../../core/text-modal/text-modal.component";
import { ApiManagerService } from "../../core/services/api-manager.service";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.scss"]
})
export class DashboardComponent implements OnInit {
  todos: any[];
  constructor(
    private api: ApiManagerService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.api
      .todos()
      .then((todos: any) => {
        this.todos = todos.todos;
      })
      .catch(err => {
        console.log(err);
        this.showError("Fetching Items Failed", err);
      });
  }

  showError(title, message) {
    let disposable = this.dialogService.addDialog(TextModalComponent, {
      title: title,
      message: message
    });
  }

  delete(id) {
    var index = this.todos.indexOf(id, 0);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
    this.api
      .delete(id.id)
      .then(() => {
        this.showError("Delete Item Succeded", "Item has been deleted");
      })
      .catch(err => {
        console.log(err);
        this.showError("Delete Item Failed", err);
      });
  }
}
