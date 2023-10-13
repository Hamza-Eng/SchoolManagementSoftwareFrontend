import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Centers} from "./Centers";
import {environment} from "../../environments/environment";

@Injectable({
  providedIn: 'root'
})
export class CentersService {
private  apiServerUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }
  public  getCenters() : Observable<Centers[]>{
    return this.http.get<Centers[]>(`${this.apiServerUrl}/center/getcenters`)
  }
  public  addCenters(center: Centers) : Observable<Centers>{
    return this.http.post<Centers>(`${this.apiServerUrl}/center/add`, center)
  }
}
