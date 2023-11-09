import { Component, OnInit } from '@angular/core';
import { PeriodicElement } from 'src/app/utility/table/table.component';
import {MatTableDataSource} from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { EstablishmentDialogComponent } from '../establishment-dialog/establishment-dialog.component';

const ELEMENT_DATA: any[] = [
  {position: 1, name: 'Hydrogen', weight: 1.0079, symbol: 'H',hamza:'hamza'},
  {position: 2, name: 'Helium', weight: 4.0026, symbol: 'He',hamza:'hamza'},
  {position: 3, name: 'Lithium', weight: 6.941, symbol: 'Li',hamza:'hamza'},
  {position: 4, name: 'Beryllium', weight: 9.0122, symbol: 'Be',hamza:'hamza'},
  {position: 5, name: 'Boron', weight: 10.811, symbol: 'B',hamza:'hamza'},
  {position: 6, name: 'Carbon', weight: 12.0107, symbol: 'C',hamza:'hamza'},
  {position: 7, name: 'Nitrogen', weight: 14.0067, symbol: 'N',hamza:'hamza'},
  {position: 8, name: 'Oxygen', weight: 15.9994, symbol: 'O',hamza:'hamza'},
  {position: 9, name: 'Fluorine', weight: 18.9984, symbol: 'F',hamza:'hamza'},
  {position: 10, name: 'Neon', weight: 20.1797, symbol: 'Ne',hamza:'hamza'},
];
@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit{
  constructor(public dialog: MatDialog){

  }
  dataSource :any;
  displayedColumns: any;
  ngOnInit(): void {
   this.dataSource = new MatTableDataSource(ELEMENT_DATA);
   this.displayedColumns= ['position', 'name', 'weight', 'symbol','hamza']
  }

  openDialog() {
    const dialogRef = this.dialog.open(EstablishmentDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  }
}


