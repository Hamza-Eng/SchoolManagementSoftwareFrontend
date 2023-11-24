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
  saveOrUpdate(data: any) {
     // this.http.post(this.url+environment+"saveorupdate",data);
     console.log("data sent  : "+data);

     this.http.post(this.url+"saveOrUpdate",data,{
       headers: new HttpHeaders({
         'Content-Type': 'application/json',
       })
     })
     .subscribe(response => {
       console.log('POST request was successful sent and receive a response : ', response);
     }, error => {
       console.error('Error during POST request', error);
     });
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }
}
