import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { servicegeneratore } from '../gen/generatore';
interface MyInterface {
  
 

}
@Injectable({
  providedIn: 'root'
})

export class EtablissementService implements servicegeneratore{
  getById(): String {
    throw new Error('Method not implemented.');
  }
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

 
  
  

}
