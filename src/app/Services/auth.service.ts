import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ResponseModel } from '../Models/login.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginInfo): Observable<ResponseModel> {
    return this.http.post<ResponseModel>(`/api/Auth/login`, loginInfo);
  }
}
