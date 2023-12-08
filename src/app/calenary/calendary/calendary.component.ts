import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core'; // useful for typechecking
import dayGridPlugin from '@fullcalendar/daygrid';
@Component({
  selector: 'app-calendary',
  templateUrl: './calendary.component.html',
  styleUrls: ['./calendary.component.css']
})
export class CalendaryComponent {
  calendarOptions: CalendarOptions = {
    initialView: 'dayGridMonth',
    events: [
      { title: 'event 1', date: new Date() },
      
    ],
    plugins: [dayGridPlugin]
  };
 
}
