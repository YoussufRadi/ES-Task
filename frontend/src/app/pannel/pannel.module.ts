import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PannelRoutingModule } from "./pannel-routing.module";
import { PannelComponent } from "./pannel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { AddTodoComponent } from "./add-todo/add-todo.component";
import { EditTodoComponent } from "./edit-todo/edit-todo.component";

@NgModule({
  imports: [CommonModule, PannelRoutingModule, SharedModule],
  declarations: [
    PannelComponent,
    DashboardComponent,
    AddTodoComponent,
    EditTodoComponent
  ]
})
export class PannelModule {}
