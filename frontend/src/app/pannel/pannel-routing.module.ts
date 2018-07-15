import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { PannelComponent } from "./pannel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { EditTodoComponent } from "./edit-todo/edit-todo.component";

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
  },
  {
    path: "add",
    component: PannelComponent,
    children: [{ path: "", component: AddTodoComponent }]
  },
  {
    path: "edit",
    component: PannelComponent,
    children: [{ path: "", component: EditTodoComponent }]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PannelRoutingModule {}
