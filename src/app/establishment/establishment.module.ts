import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentDialogModulModule } from './establishment-dialog-modul/establishment-dialog-modul.module';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';
import {MatSnackBarModule} from '@angular/material/snack-bar';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    EstablishmentDialogModulModule,
    MatSnackBarModule
   
    
  ]
})
export class EstablishmentModule { }
