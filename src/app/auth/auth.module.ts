import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthComponent } from './auth/auth.component';
import { AuthRoutingModule } from './auth-routing/auth-routing.module';
import { AuthService } from '../Services/auth.service';

@NgModule({
  declarations: [LoginComponent, RegistrationComponent, AuthComponent],
  imports: [
    CommonModule,
    AuthRoutingModule
  ],
  providers:[
    AuthService
  ]
})
export class AuthModule { }
