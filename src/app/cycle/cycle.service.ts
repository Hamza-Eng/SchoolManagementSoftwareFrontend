import { HttpClient } from '@angular/common/http';
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
