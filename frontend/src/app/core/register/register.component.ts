import { Component, OnInit } from "@angular/core";
import {
  AbstractControl,
  FormBuilder,
  FormGroup,
  Validators
} from "@angular/forms";
import { DialogService } from "node_modules/ng2-bootstrap-modal";

import { TextModalComponent } from "../text-modal/text-modal.component";
import { User } from "./../User";
import { ApiManagerService } from "../services/api-manager.service";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"]
})
export class RegisterComponent implements OnInit {
  //Property for the user
  private user: User;
  signupForm: FormGroup;

  constructor(
    private authentication: AuthenticationService,
    private fb: FormBuilder,
    private api: ApiManagerService,
    private dialogService: DialogService
  ) {}

  ngOnInit() {
    this.signupForm = this.fb.group({
      email: [
        "",
        [
          Validators.required,
          Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$")
        ]
      ],
      name: ["", [Validators.required]],
      password: this.fb.group(
        {
          pwd: ["", [Validators.required, Validators.minLength(8)]],
          confirmPwd: ["", [Validators.required, Validators.minLength(8)]]
        },
        { validator: this.passwordConfirming }
      )
    });
  }

  get email() {
    return this.signupForm.get("email");
  }

  get password() {
    return this.signupForm.get("password");
  }

  get name() {
    return this.signupForm.get("name");
  }

  passwordConfirming(c: AbstractControl): { invalid: boolean } {
    if (c.get("pwd").value !== c.get("confirmPwd").value) {
      return { invalid: true };
    }
  }

  showError(title, message) {
    let disposable = this.dialogService.addDialog(TextModalComponent, {
      title: title,
      message: message
    });
  }

  public onFormSubmit() {
    if (this.signupForm.valid) {
      this.user = this.signupForm.value;
      this.api
        .register({
          email: this.user.email,
          name: this.user.name,
          password: this.user.password.pwd
        })
        .then((data: any) => {
          this.authentication.login(data.token);
          this.authentication.setAccountText("Log Out");
          this.authentication.setSidebarValue(0);
        })
        .catch(err => {
          console.log(err);
          this.showError("Sign Up Failed", err);
        });
    }
  }
}
