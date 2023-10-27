import { Injectable } from '@angular/core';
import { servicegeneratore } from '../genertore/generatore';

@Injectable({
  providedIn: 'root'
})
export class FiliereService implements servicegeneratore{

  constructor() { }
  getById(id: number) {
    throw new Error('Method not implemented.');
  }
  findAll() {
    throw new Error('Method not implemented.');
  }
  saveOrUpdate(data: any) {
    throw new Error('Method not implemented.');
  }
  deleteById(id: number) {
    throw new Error('Method not implemented.');
  }
  deleteAll() {
    throw new Error('Method not implemented.');
  }
  url: any;
}

