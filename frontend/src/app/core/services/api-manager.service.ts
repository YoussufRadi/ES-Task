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

  todos() {
    return this.http.get("/api/todo").toPromise();
  }

  add(data, id) {
    return this.http.get("/api/todo/" + id, data).toPromise();
  }

  edit(data, id) {
    return this.http.get("/api/todo/" + id, data).toPromise();
  }

  delete() {
    return this.http.delete("/api/todo").toPromise();
  }
}
