import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PannelComponent } from "./pannel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    redirectTo: "dashboard",
    pathMatch: "full"
  },
  {
    path: "dashboard",
    component: PannelComponent,
    children: [{ path: "", component: DashboardComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PannelRoutingModule {}
