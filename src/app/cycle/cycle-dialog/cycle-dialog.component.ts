import { Component, Input, OnInit ,Inject } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { cycle } from 'src/app/_core/model/cycle';

@Component({
  selector: 'app-cycle-dialog',
  templateUrl: './cycle-dialog.component.html',
  styleUrls: ['./cycle-dialog.component.css']
})
export class CycleDialogComponent implements OnInit{
  @Input()  establishmentTobeUpdate: cycle =new cycle(); 
  formData: cycle =new cycle(); 
  establishmentForm!: FormGroup;
  constructor(@Inject(MAT_DIALOG_DATA) public data: cycle,private formBuilder: FormBuilder,private dialog:MatDialogRef<CycleDialogComponent>){
    if (data!=null) {
      this.formData=data;
    }
      
    
  }
  ngOnInit(): void {
    // this.initForm();
  }
  // openSnackBar(message: string, action: string) {
  //   this._snackBar.open(message,action);
  // }

  onSubmit(){
   
      this.dialog.close(this.formData);
      console.log('Form submitted:', this.formData);
      // this.openSnackBar("establishment added ","hide");
  }
}
