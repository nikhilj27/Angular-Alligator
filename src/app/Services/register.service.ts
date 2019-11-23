import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { IRegisterModel } from "../Models/register.model";
import { ResponseModel } from "../Models/login.model";
import { Observable } from "rxjs";

@Injectable({
  providedIn: "root"
})
export class RegisterService {
  constructor(private http: HttpClient) {}

  register(userInfo: IRegisterModel): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`/api/Auth/UserRegistration`, userInfo);
  }
}
