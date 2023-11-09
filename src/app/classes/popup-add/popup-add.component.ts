import {Component, OnInit} from '@angular/core';
import {MatDialogRef} from "@angular/material/dialog";
import {ClassesService} from "../classes.service";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-popup-add',
  templateUrl: './popup-add.component.html',
  styleUrls: ['./popup-add.component.css']
})
export class PopupAddComponent implements OnInit{
  classesForm : FormGroup = new FormGroup({})
constructor(public dialogref: MatDialogRef<PopupAddComponent>, private classesService: ClassesService,
            private  formBuilder:FormBuilder, private formGroup: FormGroup) {}

  ngOnInit(): void {
    this.classesForm = this.formBuilder.group({
      id : ['', Validators.required],
      name :['', Validators.required],
      numero:['',Validators.required]
    })
  }

  onSubmit(){
    let addedForm = this.classesForm.value;
    this.classesService.addClasses(addedForm).subscribe();

  }

}
