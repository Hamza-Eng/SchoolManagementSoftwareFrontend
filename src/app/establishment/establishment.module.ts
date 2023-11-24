import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentDialogModulModule } from './establishment-dialog-modul/establishment-dialog-modul.module';
import {MatSnackBarModule} from '@angular/material/snack-bar';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstablishmentDialogModulModule,
    MatSnackBarModule,



  ]
})
export class EstablishmentModule { }
