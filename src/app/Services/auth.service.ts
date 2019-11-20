import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

let headers: HttpHeaders = new HttpHeaders();
headers = headers.append('Content-Type', 'application/json');
headers = headers.append('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(private http: HttpClient) {}

  login(loginInfo): Observable<any> {
    return this.http.post(`/api/Auth/login`, loginInfo);
  }
}
