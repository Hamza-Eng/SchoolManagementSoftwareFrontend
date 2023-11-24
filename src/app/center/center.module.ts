import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CenterDialogComponent } from './center-dialog/center-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    CenterDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule,
  
     MatSelectModule,
 
    //  ReactiveFormsModule,
  ]
})
export class CenterModule { }
