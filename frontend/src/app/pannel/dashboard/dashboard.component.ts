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
  users;
  constructor(
    private api: ApiManagerService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.api
      .todos()
      .then(users => {
        this.users = users;
      })
      .catch(err => {
        console.log(err);
        this.showError("Sign In Failed", err);
      });
  }

  showError(title, message) {
    let disposable = this.dialogService.addDialog(TextModalComponent, {
      title: title,
      message: message
    });
  }
}
