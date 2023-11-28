import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {Classes} from "../_core/model/class";

@Injectable({
  providedIn: 'root'
})
export class ClassesService {
  url:string= 'http://localhost:8060/class';

  classes : Classes[]= [];
  constructor(private http: HttpClient) { }

  getClasses():Observable<Classes[]>{
    return  this.http.get<Classes[]>(this.url+"/findAll");
  }
  addClasses(newclass:Classes){
    return this.http.post<Classes>(this.url+"/saveOrUpdate",newclass);

  }
  updateClasses(id: number , classe : Classes){
    return this.http.put<void>(this.url+"/update/"+id, classe)
  }
}
