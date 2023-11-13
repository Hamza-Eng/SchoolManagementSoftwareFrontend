import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef,MatDialog} from "@angular/material/dialog";
import {ClassesService} from "../classes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AddSuceesfullyComponent} from "../../_shared/components/add-suceesfully/add-suceesfully.component";


@Component({
  selector: 'app-popup-add',
  templateUrl: './popup-add.component.html',
  styleUrls: ['./popup-add.component.css']
})
export class PopupAddComponent {
  classesForm : FormGroup = new FormGroup({})
constructor(public dialogRef: MatDialogRef<PopupAddComponent>,
            private classesService: ClassesService,
            private  formBuilder:FormBuilder,
            private dilog:MatDialog) {
  this.classesForm = this.formBuilder.group({
    id : ['', Validators.required],
    name :['', Validators.required],
    numero:['',Validators.required]
  })
}


  onSubmit(){
    if(this.classesForm.valid) {
      let addedForm = this.classesForm.value;
      this.classesService.addClasses(addedForm).subscribe({next:()=>{
        this.dialogRef.close();
        this.dilog.open(AddSuceesfullyComponent,{
          width: "256px"
        });},
        error:(err)=>{
        console.log(err)
        }

      })

    }
  }

}
