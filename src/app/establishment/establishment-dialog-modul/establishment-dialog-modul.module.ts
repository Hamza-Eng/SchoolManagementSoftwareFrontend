import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EstablishmentDialogComponent } from '../establishment-dialog/establishment-dialog.component';
import {MatDialogModule} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';



@NgModule({
  declarations: [
    EstablishmentDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
     MatInputModule, 
     MatSelectModule
    

  ]
})
export class EstablishmentDialogModulModule { }
