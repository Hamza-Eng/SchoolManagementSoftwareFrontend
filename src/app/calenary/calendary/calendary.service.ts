import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import { Injectable } from '@angular/core';
import { Event } from 'src/app/_core/model/event';

@Injectable({
  providedIn: 'root'
})
export class CalendaryService {

  constructor(public http:HttpClient) { }

  findAll():Observable<Event[]> {
    return this.http.get<Event[]>("http://localhost:8080/event/findAll");

}
}
