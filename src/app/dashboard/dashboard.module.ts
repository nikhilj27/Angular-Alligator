import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { DashboardRoutingModule } from "./dashboard-Routing/dashboard-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { SharedModule } from "../shared/shared.module";
import { HeaderComponent } from "../shared/header/header.component";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { MatCardModule } from "@angular/material/card";
import { HomeComponent } from "./dashboard/home/home.component";
@NgModule({
  declarations: [DashboardComponent, HeaderComponent, HomeComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class DashboardModule {}
