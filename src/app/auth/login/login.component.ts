import { Component, OnInit } from '@angular/core';
import { ILoginModel, LoginModel, ResponseModel } from './login.model';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  login() {

    const loginModel: LoginModel = new LoginModel('son.chetanakulkarni@gmail.com', 'Chetan@123');
    this.loginService.login(loginModel).subscribe((response: ResponseModel) => {
      console.log(response.data);
    });
  }


}
