import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TechnologylistComponent } from "../technologylist/technologylist.component";
import { CommonModule } from "@angular/common";

const routes: Routes = [
  {
    path: "",
    component: TechnologylistComponent,
    data: { page: "technology" }
  }
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule {}
