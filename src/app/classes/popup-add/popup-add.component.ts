import {Component, OnInit, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef,MatDialog} from "@angular/material/dialog";
import {ClassesService} from "../classes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

import {AddSuceesfullyComponent} from "../../_shared/components/add-suceesfully/add-suceesfully.component";
import {Classes} from "../../_core/model/class";


@Component({
  selector: 'app-popup-add',
  templateUrl: './popup-add.component.html',
  styleUrls: ['./popup-add.component.css']
})
export class PopupAddComponent  implements  OnInit{
  classesForm : FormGroup = new FormGroup({})
constructor(public dialogRef: MatDialogRef<PopupAddComponent>,
            private classesService: ClassesService,
            private  formBuilder:FormBuilder,
            private dilog:MatDialog,
            @Inject(MAT_DIALOG_DATA) private data : Classes) {
  this.classesForm = this.formBuilder.group({

    id:[''],
    nom :['', Validators.required],
    numero:['',Validators.required],
    niveauxId:['', Validators.required],

  })
}


  onSubmit(){


    if(this.classesForm.valid) {
      if(this.data){
        //update our Class


        let id = this.data.id;
        if(id){
          this.classesService.updateClasses(id , this.classesForm.value).subscribe({
            next: () => {

              this.dialogRef.close();
              alert("updated")
              this.dilog.open(AddSuceesfullyComponent, {
                width: "256px"
              });
            },
            error: (err) => {
              console.log(err)
            }

          })

        }else
        {
          let addedForm = this.classesForm.value;
          this.classesService.addClasses(addedForm).subscribe({
            next: () => {
              this.dialogRef.close();
              this.dilog.open(AddSuceesfullyComponent, {
                width: "256px"
              });
            },
            error: (err) => {
              console.log(err)
            }

          })

        }


      }else {
        //add new Class
        let addedForm = this.classesForm.value;
        this.classesService.addClasses(addedForm).subscribe({
          next: () => {
            this.dialogRef.close();
            this.dilog.open(AddSuceesfullyComponent, {
              width: "256px"
            });
          },
          error: (err) => {
            console.log(err)
          }

        })
      }
    }

  }

  ngOnInit(): void {
    console.log(this.data.nom)


    this.classesForm.patchValue(this.data)
    console.log(this.classesForm.value)
  }

}
