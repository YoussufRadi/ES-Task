import { Component, OnInit } from "@angular/core";
import { AuthenticationService } from "../services/authentication.service";

@Component({
  selector: "app-sidebar",
  templateUrl: "./sidebar.component.html",
  styleUrls: ["./sidebar.component.scss"]
})
export class SidebarComponent implements OnInit {
  switch: boolean = false;
  account: string = "Sign in";
  selected: number = 5;
  constructor(private authentication: AuthenticationService) {
    this.authentication.getAccountText().subscribe(newValue => {
      this.account = newValue;
    });
    this.authentication.getSidebarValue().subscribe(newValue => {
      this.selected = newValue;
    });
  }
  ngOnInit() {
    if (this.authentication.isAuthenticated()) this.account = "Logout";
  }

  isLoggedIn() {
    return this.authentication.isAuthenticated();
  }

  setSelected(num: number) {
    if (this.authentication.isAuthenticated()) {
      this.selected = num;
      if (this.selected === 5) {
        this.authentication.logout();
        this.authentication.setAccountText("Sign in");
      }
    }
  }

  toggle() {
    this.switch = !this.switch;
  }
}
