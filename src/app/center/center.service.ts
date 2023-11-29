import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {Observable} from "rxjs";
import { environment } from 'src/environments/environment';
import { servicegeneratore } from '../genertore/generatore';
import { Centres } from '../_core/model/Centres';

@Injectable({
  providedIn: 'root'
})
export class CenterService {
  
  url: string=environment.url+"center/";
  constructor(private http:HttpClient) { }
  getById(id: number) {
    throw new Error('Method not implemented.');
  }
  findAll():Observable<Centres[]> {
    return this.http.get<Centres[]>(this.url+"findAll");

}
  saveOrUpdate(data: Centres) {
    //  return this.http.post<Centres>(this.url+environment+"saveOrUpdate",data);
    
  
  }
  deleteById(id: number):Observable<boolean> {
     return this.http.delete<boolean>("http://localhost:8060/center/delete/"+id);
    
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }
}
