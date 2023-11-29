import { Component , Inject, OnInit} from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { EstablishmentService } from 'src/app/establishment/establishment.service';
import { Centres } from 'src/app/_core/model/Centres';
import { establishment } from 'src/app/_core/model/establishment';

@Component({
  selector: 'app-center-dialog',
  templateUrl: './center-dialog.component.html',
  styleUrls: ['./center-dialog.component.css']
})
export class CenterDialogComponent implements OnInit{
  constructor(@Inject(MAT_DIALOG_DATA) public data: Centres,private dialog:MatDialogRef<CenterDialogComponent>,private Service:EstablishmentService){
if (data!=null) {
  this.formData=data;
}
  }
  etablishment:establishment[]=[];
  ngOnInit(): void {
    this.Service.findAll().subscribe(resulta=>{
      this.etablishment=resulta;
    });
  }
  formData: Centres =new Centres(); 
  onSubmit(){
    this.dialog.close(this.formData);
    console.log('Form submitted:', this.formData);
    // this.openSnackBar("establishment added ","hide");
  }
}
