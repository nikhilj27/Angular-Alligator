import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ILoginModel, LoginModel, ResponseModel } from './login.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor(private http: HttpClient) {}

  login(loginModel: ILoginModel): Observable<ResponseModel> {
    if (loginModel.isPasswordValid() && loginModel.isUsernameValid()) {
      return this.http
        .post<ResponseModel>('/api/Auth/login', loginModel);
    }
  }
}
