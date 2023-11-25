import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component,OnInit, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { PeriodicElement } from 'src/app/utility/table/table.component';
import { Centres } from 'src/app/_core/model/Centres';
import { DialogComponent } from 'src/app/_shared/components/dialog/dialog/dialog.component';
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
  constructor(private _snackBar: MatSnackBar,private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog,private service:CenterService){

  }
  dataSource :any;
  displayedColumns: any;
  centers:Centres[]=[];
  ngOnInit(): void {
    this.fetchdata();    
    this.displayedColumns= ["id" ,"nomcentre" ,"adresse" ,"email" ,"tel","update","delete" ]
    // "id" ,"nomcentre" ,"adresse" ,"email" ,"tel" ,"content" ,"etablissementId" ,"cycles" ,
  }

delete(){
 
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
  
}
update(center:Centres){
  const dialogRef = this.dialog.open(CenterDialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result: ${result}`);
    });
}
  fetchdata(){
    this.service.findAll().subscribe((data)=>{
      this.centers=data;
      this.dataSource = new MatTableDataSource(this.centers);
      this.dataSource.sort = this.sort;
    },
    (error) => {
      console.error('Error:', error);
      // Handle error response (status code 500 or other error codes)
    }
    )
  }
  openDialog() {
    const dialogRef = this.dialog.open(CenterDialogComponent);
    
    dialogRef.afterClosed().subscribe(result => {
      this.service.saveOrUpdate(result).subscribe((data)=>{
        this.openSnackBar("establishment added ","hide","#880808");
      },(error) => {
        console.error('Error:', error);
        this.openSnackBar("Unknew errro ","hide","#42ED03");
        // Handle error response (status code 500 or other error codes)
      });
    });
  }


  openSnackBar(message: string, action: string,color:string) {
    this._snackBar.open(message,action,{data: { color: color },});
  }
    @ViewChild(MatSort)
    sort!: MatSort;
  
    // ngAfterViewInit() {
    //   this.dataSource.sort = this.sort;
    // }
  
    /** Announce the change in sort state for assistive technology. */
    announceSortChange(sortState: Sort) {
      // This example uses English messages. If your application supports
      // multiple language, you would internationalize these strings.
      // Furthermore, you can customize the message to add additional
      // details about the values being sorted.
      if (sortState.direction) {
        this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
      } else {
        this._liveAnnouncer.announce('Sorting cleared');
      }
    }
    applyFilter(event: Event) {
      const filterValue = (event.target as HTMLInputElement).value;
      this.dataSource.filter = filterValue.trim().toLowerCase();
  
      if (this.dataSource.paginator) {
        this.dataSource.paginator.firstPage();
      }
    }
}

