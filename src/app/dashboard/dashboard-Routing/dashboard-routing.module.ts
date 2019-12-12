import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { DashboardComponent } from "../dashboard/dashboard.component";
import { HomeComponent } from "../dashboard/home/home.component";

const routes: Routes = [
  {
    path: "",
    component: DashboardComponent,
    children: [
      {
        path: "",
        component: HomeComponent
      },
      {
        path: "newblog",
        loadChildren: () =>
          import("./../../newblog/newblog.module").then(m => m.NewblogModule)
      },
      {
        path: "technology",
        loadChildren: () =>
          import("./../../technologies/technologies.module").then(
            m => m.TechnologiesModule
          )
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule {}
