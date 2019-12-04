import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { NewblogComponent } from "../newblog/newblog.component";

const routes: Routes = [
  {
    path: "",
    component: NewblogComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NewblogRoutingModule {}
