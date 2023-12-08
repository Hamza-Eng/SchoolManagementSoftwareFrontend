import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendaryComponent } from './calendary/calendary.component';
import { FullCalendarModule } from '@fullcalendar/angular';



@NgModule({
  declarations: [
    CalendaryComponent
  ],
  imports: [
    CommonModule,
    FullCalendarModule ,// register FullCalendar with your app
  ]
})
export class CalenaryModule { }
