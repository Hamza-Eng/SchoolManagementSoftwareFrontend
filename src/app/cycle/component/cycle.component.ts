import { LiveAnnouncer } from '@angular/cdk/a11y';
import { Component, ViewChild , OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSort, Sort } from '@angular/material/sort';
import { cycle } from 'src/app/_core/model/cycle';
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
 
  cycles: cycle[] = [];
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
  ngOnInit(): void {

    // this.service.findAll().subscribe(data => {
    //   console.log(data)
    //   this.cycles = data;
    //   this.dataSource = new MatTableDataSource(data);
    //   this.dataSource.sort = this.sort;
    // })
    this.displayedColumns = ["id", "name", "email", "ice", "tel", "adresse","update","delete"]
    // ,"adresse" ,"ville"  ,"email"  ,"descc"  ,"web"  ,"ice"  ,"rc"  ,"patente"  ,"cnss"  ,"ifs"  ,"tel"  ,"portable"  ,"banque" ,"agence"  ,"rib"  ,"image"  ,"userId"  ,"createdAt"  ,"updatedAt"   ,"centres"
  }

  refresh(id:number){
    // this.cycles = this.cycles.filter(e => e.id !== id);
    // this.dataSource = new MatTableDataSource(this.cycles);
  }
  delete(id:number){
 
    // const dialogRef = this.dialog.open(DialogComponent);

    // dialogRef.afterClosed().subscribe(result => {
    //  if (result) {
    //  if (  this.service.deleteById(id)) {
    //    this.refresh(id);
      
    //  }
      
      
      
     }
    


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
