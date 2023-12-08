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
  refresh(id:number){
    this.centers = this.centers.filter(e => e.id !== id);
    this.dataSource = new MatTableDataSource(this.centers);
   
  }
delete(id:number){
 
    const dialogRef = this.dialog.open(DialogComponent);console.log(id);
    dialogRef.afterClosed().subscribe(result => {
     if (result) {
      this.service.deleteById(id)
      console.log("hello from delete");
      
      window.location.reload();
     }});
        
  
}
update(center:Centres){
  const dialogRef = this.dialog.open(CenterDialogComponent,{
    data:center,
    
  });

    dialogRef.afterClosed().subscribe(result => {
      console.log(result);
      
      this.service.saveOrUpdate(result); 
    });
}
  fetchdata(){
    this.service.findAll().subscribe((data)=>{
      this.centers=data;
      console.log(data);
      
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
      this.service.saveOrUpdate(result);
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

