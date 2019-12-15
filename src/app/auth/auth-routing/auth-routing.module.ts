import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from "../login/login.component";
import { RegistrationComponent } from "../registration/registration.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent,
    data: { page : 'login' }
  },
  {
    path: "register",
    component: RegistrationComponent,
    data: { page : 'register' }
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule {}
