import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DialogService } from "node_modules/ng2-bootstrap-modal";

import { TextModalComponent } from "../text-modal/text-modal.component";
import { AuthenticationService } from "../services/authentication.service";
import { User } from "./../User";
import { ApiManagerService } from "../services/api-manager.service";

@Component({
  selector: "app-forget-password",
  templateUrl: "./forget-password.component.html",
  styleUrls: ["./forget-password.component.scss"]
})
export class ForgetPasswordComponent implements OnInit {
  private user: User;
  forgetForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private api: ApiManagerService,
    private router: Router,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.forgetForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
        ]
      ]
    });
  }

  get email() {
    return this.forgetForm.get("email");
  }

  showError(title, message) {
    let disposable = this.dialogService.addDialog(TextModalComponent, {
      title: title,
      message: message
    });
  }

  public onFormSubmit() {
    if (this.forgetForm.valid) {
      this.user = this.forgetForm.value;
      this.api
        .forget({
          email: this.user.email
        })
        .then((data: any) => {
          this.router.navigate(["reset"]);
        })
        .catch(err => {
          console.log(err);
          this.showError("Token Request Failed", err.error.detail);
        });
    }
  }
}
