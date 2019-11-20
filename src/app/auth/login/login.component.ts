import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService) {}

  ngOnInit() {
    this.loginUser();
  }

  loginUser() {
    const info = {
      username: 'nikhil',
      password: '123456'
    };

    this.authService.login(info).subscribe(response => {
      console.log(response);
    });
  }
}
