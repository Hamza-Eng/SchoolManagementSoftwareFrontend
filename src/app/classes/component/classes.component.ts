import {Component, OnInit} from '@angular/core';
import {Classes} from "../../_core/model/class";
import {ClassesService} from "../classes.service";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {PopupAddComponent} from "../popup-add/popup-add.component";
import {Etudiant} from "../../_core/model/etudiant";

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
   this.getClasses()

  }
  getClasses(){
    this.classesService.getClasses().subscribe(data=>{
      this.classes = data;
      console.log(data);
      this.displayedColumns= ['id', 'nom', 'schoolYear', "Numero",'niveau', 'createdAt', 'updatedAt', "update", "delete"];
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

  addclass(newclass : Classes){
     this.classesService.addClasses(newclass).subscribe(()=>{
      console.log("class adedd !")
    })
  }

  update(data: Classes): void {

   const dialogRef =   this.dialog.open(PopupAddComponent, {
       data,
    });
    dialogRef.afterClosed().subscribe({
      next: (val)=>{
        this.getClasses()

      }
    })
  }

  delete(id: number) {
    this.classesService.deleteClasses(id).subscribe({
      next:()=>this.getClasses()

    })

  }
}
