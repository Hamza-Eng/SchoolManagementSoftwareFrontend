import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { servicegeneratore } from '../genertore/generatore';

@Injectable({
  providedIn: 'root'
})

export class EtablissementService implements servicegeneratore{
  constructor(private http: HttpClient) {
  }
  url: string=environment.url+"etablissement/";

  getById(id:number) {
    this.http.get(this.url+"findById/"+id).subscribe(data => {
      console.log(data);
      
    });
    }
  findAll() {
    this.http.get(this.url+"findAll").subscribe(data => {
      console.log(data);
      
    });
  }
  saveOrUpdate(data: any) {
    this.http.post(this.url+"saveorupdate", data).subscribe(response => {
      console.log(response);
    });
  }
  deleteById(id : number) {
    this.http.delete(this.url+"delete/"+id).subscribe(response => {
     console.log(response);
     
    });
  }
  deleteAll() {
    this.http.delete(this.url+"deleteAll").subscribe(response => {
      console.log(response);
      
     });
  }
}
