import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { TechnologylistComponent } from "../technologylist/technologylist.component";

const routes: Routes = [
  {
    path: "",
    component: TechnologylistComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TechnologyRoutingModule {}
