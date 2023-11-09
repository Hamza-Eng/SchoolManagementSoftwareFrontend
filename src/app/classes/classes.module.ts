import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HttpClientModule} from "@angular/common/http";
import {ClassesComponent} from "./component/classes.component";
import {AppModule} from "../app.module";
import {MatTableModule} from "@angular/material/table";
import { PopupAddComponent } from './popup-add/popup-add.component';
import {MatButtonModule} from "@angular/material/button";
import { MatDialogModule} from "@angular/material/dialog";
import {MatInputModule} from "@angular/material/input";



@NgModule({
  declarations: [
    ClassesComponent,
    PopupAddComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,

    MatTableModule,
    MatButtonModule,
    MatDialogModule,
    MatInputModule
  ]
})
export class ClassesModule { }
