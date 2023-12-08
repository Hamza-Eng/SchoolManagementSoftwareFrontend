import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild , OnInit } from '@angular/core';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { cycle } from 'src/app/_core/model/cycle';
import { DialogComponent } from 'src/app/_shared/components/dialog/dialog/dialog.component';
import { CycleDialogComponent } from '../cycle-dialog/cycle-dialog.component';
import { CycleService } from '../cycle.service';

@Component({
  selector: 'app-cycle',
  templateUrl: './cycle.component.html',
  styleUrls: ['./cycle.component.css']
})
export class CycleComponent implements OnInit {
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private service: CycleService) {

  }
  dataSource: any;
  displayedColumns: any;
  cycleToBeUpdated: cycle=new cycle();
 
  cycles: cycle[] = [];
  @ViewChild(MatSort)
  sort!: MatSort;
  announceSortChange(sortState: Sort) {

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
  ngOnInit(): void {

    this.service.findAll().subscribe(data => {
      console.log(data)
      this.cycles = data;
      this.dataSource = new MatTableDataSource(data);
   
      this.dataSource.sort = this.sort;
    })

    this.displayedColumns = ["id","name","description","createdAt","update","delete"];
  
  
  }

  update(cycle:cycle){
    const dialogConfig = new MatDialogConfig();
    this.cycleToBeUpdated=cycle;
    dialogConfig.data = this.cycleToBeUpdated;
    const dialogRef = this.dialog.open(CycleDialogComponent,{
      data:cycle
    });
  
      dialogRef.afterClosed().subscribe(result => {
        if (result) {
          this.service.saveOrUpdate(result);
          window.location.reload();
        }
      });
  }
  refresh(id:number){
    // this.cycles = this.cycles.filter(e => e.id !== id);
    // this.dataSource = new MatTableDataSource(this.cycles);
  }
  delete(id:number){
 
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
      if (result) {
        this.service.deleteById(id);
          window.location.reload();
      }
    })}
   



  openDialog() {
    // const dialogRef = this.dialog.open(cyclesDialogComponent,);
    // dialogRef.afterClosed().subscribe((result) => {
    //   if (result) {
        
    //     console.log('Dialog closed with result:', result);
    //     this.service.saveOrUpdate(result);
    //     window.location.reload();
    //     // Handle the result data from the dialog, e.g., update the dataSource
    //     // this.dataSource.push(result); // Update dataSource as per your requirements
    //   } else {  
    //     console.log('Dialog closed without result');
    //   }

    // });
  }
}
