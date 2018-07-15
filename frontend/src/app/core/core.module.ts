import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { CommonModule } from "@angular/common";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { NgHttpLoaderModule } from "ng-http-loader";
import { BootstrapModalModule } from "ng2-bootstrap-modal";

import { CoreRoutingModule } from "./core-routing.module";
import { LoginComponent } from "./login/login.component";
import { SidebarComponent } from "./sidebar/sidebar.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { RegisterComponent } from "./register/register.component";
import { ForgetPasswordComponent } from "./forget-password/forget-password.component";
import { ResetPasswordComponent } from "./reset-password/reset-password.component";
import { TextModalComponent } from "./text-modal/text-modal.component";
import { ApiManagerService } from "./services/api-manager.service";
import { AuthenticationService } from "./services/authentication.service";
import { AuthGuardService } from "./services/auth-guard.service";
import { ApiInterceptorService } from "./services/api-interceptor.service";

@NgModule({
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CoreRoutingModule,
    BootstrapModalModule.forRoot({ container: document.body }),
    HttpClientModule,
    NgHttpLoaderModule //TODO Test if spinner works
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
    ForgetPasswordComponent,
    ResetPasswordComponent,
    SidebarComponent,
    TextModalComponent,
    NotFoundComponent
  ],
  entryComponents: [TextModalComponent],
  exports: [RouterModule, SidebarComponent, NgHttpLoaderModule],
  schemas: [NO_ERRORS_SCHEMA],
  providers: [
    AuthenticationService,
    AuthGuardService,
    ApiManagerService,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: ApiInterceptorService,
      multi: true
    }
  ]
})
export class CoreModule {}
