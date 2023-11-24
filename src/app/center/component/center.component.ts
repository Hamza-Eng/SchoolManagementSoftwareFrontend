import { Component,OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/utility/table/table.component';
import { Centres } from 'src/app/_core/model/Centres';
import { CenterDialogComponent } from '../center-dialog/center-dialog.component';
import { CenterService } from '../center.service';
const ELEMENT_DATA: PeriodicElement[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne'},
];
@Component({
  selector: 'app-center',
  templateUrl: './center.component.html',
  styleUrls: ['./center.component.css']
})
export class CenterComponent implements OnInit{
  constructor(public dialog: MatDialog,private service:CenterService){

  }
  dataSource :any;
  displayedColumns: any;
  centers:Centres[]=[];
  ngOnInit(): void {
    this.service.findAll().subscribe(data=>{
      this.centers=data;
      
      
    })
    this.displayedColumns= ['position', 'name', 'weight', 'symbol']
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  openDialog() {
    const dialogRef = this.dialog.open(CenterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      this.service.saveOrUpdate(result);
    });
  }
}

