import {Component, OnInit} from '@angular/core';
import {Classes} from "../../_core/model/class";
import {ClassesService} from "../classes.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {PopupAddComponent} from "../popup-add/popup-add.component";

@Component({
  selector: 'app-classes',
  templateUrl: './classes.component.html',
  styleUrls: ['./classes.component.css']
})
export class ClassesComponent implements OnInit{
  classes: Classes[]=[];

  constructor(private classesService: ClassesService, public dialog:MatDialog) {
  }

  dataSource :any;
  displayedColumns: any;
  ngOnInit(): void {
    this.classesService.getClasses().subscribe(data=>{
      this.classes = data;
      this.displayedColumns= ['id', 'name', 'numero'];
      this.dataSource = new MatTableDataSource(
        data
      );




    })

  }

  openDialogToAdd(enterAnimation:any, exiteAnimation:any){
   this.dialog.open(PopupAddComponent,{
      enterAnimationDuration:enterAnimation,
      exitAnimationDuration:exiteAnimation,
      width:"50%"
    })
  }
}
