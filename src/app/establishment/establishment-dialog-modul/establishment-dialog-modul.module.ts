import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentDialogComponent } from '../establishment-dialog/establishment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';



@NgModule({
  declarations: [
    EstablishmentDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,

  ]
})
export class EstablishmentDialogModulModule { }
