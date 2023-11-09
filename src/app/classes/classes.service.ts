import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classes} from "../_core/model/class";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  url:string= 'http://localhost:3002/';

  classes : Classes[]= [];
  constructor(private http: HttpClient) { }

  getClasses():Observable<Classes[]>{
    return  this.http.get<Classes[]>(this.url+"classes");
  }
  addClasses(newclass:Classes){
    return this.http.post<Classes>(this.url+"addclass",newclass);

  }
}
