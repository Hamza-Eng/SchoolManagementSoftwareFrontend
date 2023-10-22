import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { servicegeneratore } from '../gen/generatore';
interface MyInterface {
  
  getById() : String;
  findAll()  : any;
  saveOrUpdate ()  : any;
  deleteById () : boolean;
  deleteAll ()  : any;

}
@Injectable({
  providedIn: 'root'
})

export class EtablissementService implements MyInterface{

  constructor() { http:HttpClient}
  findAll() {
    throw new Error('Method not implemented.');
  }
  saveOrUpdate() {
    throw new Error('Method not implemented.');
  }
  deleteById(): boolean {
    throw new Error('Method not implemented.');
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }
  FindAll(): any {
    throw new Error('Method not implemented.');
  }
  getById(): String {
    throw new Error('Method not implemented.');
  }
  
  
  

}
