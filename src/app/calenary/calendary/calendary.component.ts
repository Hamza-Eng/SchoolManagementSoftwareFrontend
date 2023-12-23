import { Component, OnInit } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
import { Event } from 'src/app/_core/model/event';
import { CalendaryService } from './calendary.service';
@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.css']
})
export class CalendaryComponent implements OnInit {
  constructor(private service:CalendaryService){}
  Events:Event[]=[];
  ngOnInit(): void {
  
   this.service.findAll().subscribe(result=>{
    this.Events=result;
    console.log(this.Events);
    
    
   });
   
  }
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: 
     [
      {
         
        title: "event 1",
        date: "2023-12-11T23:00:00.000+00:00",
      
    },
    {
     
        title : "event 1",
        date : "2023-12-10T20:15:49.908+00:00",
      
    }
    ],
    
    plugins: [dayGridPlugin]
  };
 
}
