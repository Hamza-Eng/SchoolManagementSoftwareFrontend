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
  saveOrUpdate(data: Centres){
      // return this.http.post<Centres>(this.url+environment+"saveOrUpdate",data);
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
    return this.http.delete("http://localhost:8060/center/delete/"+id)
    .subscribe(response => {
      console.log('Response of deletion :', response);
    }, error => {
      console.error('Error during delete request', error);
    });
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }
}
