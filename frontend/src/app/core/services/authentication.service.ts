import { Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { Subject, Observable } from "rxjs";

@Injectable()
export class AuthenticationService {
  token = "ewrewfewf";
  tokenKey: string = "a5smm_utoken";
  private accountValue: Subject<string> = new Subject();
  private sidebarValue: Subject<number> = new Subject();

  constructor(private router: Router) {}

  login(token) {
    this.setToken(token);
    this.router.navigate(["pannel", "dashboard"]);
  }

  logout() {
    this.removeToken();
    this.router.navigate(["login"]);
  }

  getToken() {
    return localStorage.getItem(this.tokenKey);
  }

  setToken(token) {
    localStorage.setItem(this.tokenKey, token);
  }

  isAuthenticated() {
    const token = this.getToken();
    if (token) {
      return true;
    } else {
      return false;
    }
  }

  removeToken() {
    localStorage.removeItem(this.tokenKey);
  }

  public getAccountText(): Observable<string> {
    return this.accountValue.asObservable();
  }

  public setAccountText(value: string): void {
    this.accountValue.next(value);
  }

  public getSidebarValue(): Observable<number> {
    return this.sidebarValue.asObservable();
  }

  public setSidebarValue(value: number): void {
    this.sidebarValue.next(value);
  }
}
