import { Dialog } from '@angular/cdk/dialog';
import { Component,OnInit,Input, Inject } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { establishment } from 'src/app/_core/model/establishment';

@Component({
  selector: 'app-establishment-dialog',
  templateUrl: './establishment-dialog.component.html',
  styleUrls: ['./establishment-dialog.component.css']
  
})
export class EstablishmentDialogComponent implements OnInit{
  @Input()  establishmentTobeUpdate: establishment =new establishment(); 
  formData: establishment =new establishment(); 
  establishmentForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: establishment,private _snackBar: MatSnackBar,private formBuilder: FormBuilder,private dialog:MatDialogRef<EstablishmentDialogComponent>){
    if (data!=null) {
      this.formData=data;
    }
      
    
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
