import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { servicegeneratore } from '../genertore/generatore';
import {Observable} from "rxjs";
import {Classes} from "../_core/model/class";
import {establishment} from "../_core/model/establishment";

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService {

  url: string=environment.url+"etablissement/";

  constructor(private http: HttpClient) {
  }
  getById(id: number) {

  }


  findAll():Observable<establishment[]> {
       return this.http.get<establishment[]>(this.url+"findAll");

  }
    saveOrUpdate(data: any) {
      // this.http.post(this.url+environment+"saveorupdate",data);
      console.log("data sent  : "+data);

      this.http.post(this.url+"saveorupdate",data,{
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
  deleteById(id: number)  {
     return this.http.delete("http://localhost:8060/etablissement/delete/"+id)
    .subscribe(response => {
      // console.log('delete request was successful sent and receive a response : ', response);
      console.log('Response of deletion :', response);
    }, error => {
      console.error('Error during POST request', error);
    });
  }
  deleteAll() {

  }



}

