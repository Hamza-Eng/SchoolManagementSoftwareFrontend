import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { servicegeneratore } from '../genertore/generatore';
import { cycle } from '../_core/model/cycle';

@Injectable({
  providedIn: 'root'
})
export class CycleService implements servicegeneratore{

  constructor(private http:HttpClient) { }
  getById(id: number) {
    throw new Error('Method not implemented.');
  }
  findAll():Observable<cycle[]> {
    return this.http.get<cycle[]>("http://localhost:8060/cycle/findAll");

}

  saveOrUpdate(data: cycle) {
   // this.http.post(this.url+environment+"saveorupdate",data);
   console.log("data sent  : "+data);

   this.http.post("http://localhost:8060/cycle/saveOrUpdate",data,{
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
    return this.http.delete("http://localhost:8060/cycle/delete/"+id)
    .subscribe(response => {
      console.log('Response of deletion :', response);
    }, error => {
      console.error('Error during delete request', error);
    });
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }
  url: any;
}
