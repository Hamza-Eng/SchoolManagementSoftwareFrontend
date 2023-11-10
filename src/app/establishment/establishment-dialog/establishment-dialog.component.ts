import { Dialog } from '@angular/cdk/dialog';
import { Component,OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-establishment-dialog',
  templateUrl: './establishment-dialog.component.html',
  styleUrls: ['./establishment-dialog.component.css']
  
})
export class EstablishmentDialogComponent implements OnInit{
  formData: any = {}; 
  establishmentForm!: FormGroup;
  constructor(private formBuilder: FormBuilder,private dialog:MatDialogRef<EstablishmentDialogComponent>){

  }
  ngOnInit(): void {
    this.initForm();
  }
  private initForm(): void {
    this.establishmentForm = this.formBuilder.group({
      name: ['', Validators.required,Validators.maxLength(50),Validators.pattern("[a-zA-Z ]*")] ,
      ice: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      selectedOption: ['', Validators.required],
      // Add more form controls as needed
    });
  }
  onSubmit(){
    
    this.dialog.close();
    console.log('Form submitted:', this.formData);
    
  }
}
