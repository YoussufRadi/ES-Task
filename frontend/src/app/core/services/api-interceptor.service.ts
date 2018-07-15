import { Injectable, Injector } from "@angular/core";
import { Router } from "@angular/router";
import {
  HttpHandler,
  HttpRequest,
  HttpEvent,
  HttpResponse,
  HttpErrorResponse,
  HttpInterceptor
} from "@angular/common/http";
import { Observable } from "rxjs";
import { environment } from "../../../environments/environment";
import { AuthenticationService } from "./authentication.service";
import { tap } from "rxjs/operators";

@Injectable()
export class ApiInterceptorService {
  constructor(public auth: AuthenticationService) {}
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    //TODO Check Interceptor
    const requestNew = request.clone({
      // setHeaders: {
      //   "x-access-token": this.auth.getToken()
      // }
    });
    return next.handle(requestNew).pipe(
      tap(
        (event: HttpEvent<any>) => {
          if (event instanceof HttpResponse) {
            // do stuff with response if you want
          }
        },
        (err: any) => {
          if (err instanceof HttpErrorResponse && err.status === 401)
            console.log("this.auth.collectFailedRequest(request);");
        }
      )
    );
  }
}
