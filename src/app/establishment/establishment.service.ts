import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { servicegeneratore } from '../genertore/generatore';

@Injectable({
  providedIn: 'root'
})
export class EstablishmentService implements servicegeneratore{
  
  url: string=environment.url+"etablissement/";

  constructor(private http: HttpClient) {
  }
  getById(id: number) {
     
  }
  findAll() {
   
  }
  saveOrUpdate(data: any) {
     
  }
  deleteById(id: number) {
     
  }
  deleteAll() {
     
  }
  

 
}

