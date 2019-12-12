import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { ResponseModel } from "../Models/login.model";

@Injectable({
  providedIn: "root"
})
export class TechnologyService {
  constructor(private http: HttpClient) {}

  getTechnologyList(): Observable<ResponseModel> {
    return this.http.get<ResponseModel>("");
  }

  modifyTechnology(model: any): Observable<ResponseModel> {
    return this.http.post<ResponseModel>("", model);
  }
}
