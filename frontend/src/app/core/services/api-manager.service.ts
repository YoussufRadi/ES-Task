import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

@Injectable()
export class ApiManagerService {
  constructor(private http: HttpClient) {}

  register(data) {
    return this.http.post("/api/auth/signup", data).toPromise();
  }

  login(data) {
    return this.http.post("/api/auth/signin", data).toPromise();
  }

  reset(data) {
    return this.http.post("/api/auth/reset", data).toPromise();
  }

  forget(data) {
    return this.http.post("/api/auth/forget", data).toPromise();
  }

  getItem(id) {
    return this.http.get("/api/todo/" + id).toPromise();
  }

  todos() {
    return this.http.get("/api/todo").toPromise();
  }

  add(data) {
    return this.http.post("/api/todo", data).toPromise();
  }

  edit(data, id) {
    return this.http.patch("/api/todo/" + id, data).toPromise();
  }

  delete(id) {
    return this.http.delete("/api/todo/" + id).toPromise();
  }
}
