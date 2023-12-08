import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CycleDialogComponent } from './cycle-dialog/cycle-dialog.component';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';



@NgModule({
  declarations: [
    CycleDialogComponent
  ],
  imports: [
    CommonModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule, 
    FormsModule,
    MatSelectModule
  ]
})
export class CycleModule { }
