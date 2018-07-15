import { Injectable } from "@angular/core";
import { AuthenticationService } from "./authentication.service";
import { Router, CanActivate } from "@angular/router";

@Injectable()
export class AuthGuardService implements CanActivate {
  constructor(
    private authentication: AuthenticationService,
    private router: Router
  ) {}

  canActivate(): boolean | Promise<boolean> {
    return this.authentication.isAuthenticated();
  }

  redirectToLoginPage() {
    this.router.navigate(["/login"]);
  }
}
