import { Dialog } from '@angular/cdk/dialog';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-establishment-dialog',
  templateUrl: './establishment-dialog.component.html',
  styleUrls: ['./establishment-dialog.component.css']
  
})
export class EstablishmentDialogComponent implements OnInit{
  formData: any = {}; 
  establishmentForm!: FormGroup;
  constructor(private _snackBar: MatSnackBar,private formBuilder: FormBuilder,private dialog:MatDialogRef<EstablishmentDialogComponent>){

  }
  ngOnInit(): void {
    // this.initForm();
  }
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message,action);
  }
  onSubmit(){
   
      this.dialog.close(this.formData);
      console.log('Form submitted:', this.formData);
      this.openSnackBar("establishment added ","hide");
    
   
   
    
  }
}
