import { Component, OnInit } from "@angular/core";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { DialogService } from "node_modules/ng2-bootstrap-modal";

import { TextModalComponent } from "../text-modal/text-modal.component";
import { AuthenticationService } from "../services/authentication.service";
import { User } from "./../User";
import { ApiManagerService } from "../services/api-manager.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class LoginComponent implements OnInit {
  private user: User;
  loginForm: FormGroup;

  constructor(
    private authentication: AuthenticationService,
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
    this.loginForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
        ]
      ],
      password: ["", [Validators.required, Validators.minLength(8)]]
    });
  }

  get email() {
    return this.loginForm.get("email");
  }

  get password() {
    return this.loginForm.get("password");
  }

  public onFormSubmit() {
    if (this.loginForm.valid) {
      this.user = this.loginForm.value;
      this.api
        .login({
          email: this.user.email,
          password: this.user.password
        })
        .then((data: any) => {
          this.authentication.login(data.token);
          this.authentication.setAccountText("Log Out");
          this.authentication.setSidebarValue(0);
        })
        .catch(err => {
          console.log(err);
          this.showError("Sign In Failed", err.error.detail);
        });
    }
  }
}
