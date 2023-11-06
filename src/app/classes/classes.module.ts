import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ClassesComponent} from "./component/classes.component";
import {AppModule} from "../app.module";
import {MatTableModule} from "@angular/material/table";



@NgModule({
  declarations: [
    ClassesComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    AppModule,
    MatTableModule
  ]
})
export class ClassesModule { }
