import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PannelRoutingModule } from "./pannel-routing.module";
import { PannelComponent } from "./pannel.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";

@NgModule({
  imports: [CommonModule, PannelRoutingModule, SharedModule],
  declarations: [PannelComponent, DashboardComponent]
})
export class PannelModule {}
