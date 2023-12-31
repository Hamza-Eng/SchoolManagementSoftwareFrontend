import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatToolbarModule} from "@angular/material/toolbar";

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import { HttpClientModule } from '@angular/common/http';
import { MenubarComponent } from './utility/menubar/menubar.component';
import { CardComponent } from './utility/card/card.component';
import { CenterComponent } from './center/component/center.component';
import { TableComponent } from './utility/table/table.component';
import { EstablishmentComponent } from './establishment/component/establishment.component';
import { CycleComponent } from './cycle/component/cycle.component';
import { BranchComponent } from './branch/component/branch.component';
import { StudentComponent } from './student/component/student.component';
import {ClassesModule} from "./classes/classes.module";
import { EstablishmentModule } from './establishment/establishment.module';
import { StudentModule } from './student/student.module';
import { CenterModule } from './center/center.module';
import { AddSuceesfullyComponent } from './_shared/components/add-suceesfully/add-suceesfully.component';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogModule } from './_shared/components/dialog/dialog.module';
import { CycleModule } from './cycle/cycle.module';
import { FullCalendarModule } from '@fullcalendar/angular';
import { CalenaryModule } from './calenary/calenary.module';


@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    TableComponent,
    CardComponent,
    CenterComponent,
    EstablishmentComponent,
    CycleComponent,
    BranchComponent,
    StudentComponent,
    AddSuceesfullyComponent


  ],
  imports: [
    MatDialogModule,
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    // shared
    MatIconModule,
    AppRoutingModule,
    BrowserModule,
    MatListModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatButtonModule,
    


    MatSidenavModule,
    MatToolbarModule,
    // component mouduls
    EstablishmentModule,
    StudentModule,
    CenterModule,
    ClassesModule,
    DialogModule,
    // FullCalendarModule ,// register FullCalendar with your app
    CalenaryModule,






  ],
  providers: [],
  exports: [
    TableComponent
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
