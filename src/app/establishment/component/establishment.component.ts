import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement } from 'src/app/utility/table/table.component';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog, MatDialogConfig } from '@angular/material/dialog';
import { EstablishmentDialogComponent } from '../establishment-dialog/establishment-dialog.component';
import { EstablishmentService } from '../establishment.service';
import { logMessages } from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";
import { establishment } from "../../_core/model/establishment";
import { MatSort, Sort } from "@angular/material/sort";
import { LiveAnnouncer } from "@angular/cdk/a11y";
import { DialogComponent } from 'src/app/_shared/components/dialog/dialog/dialog.component';


@Component({
  selector: 'app-establishment',
  templateUrl: './establishment.component.html',
  styleUrls: ['./establishment.component.css']
})
export class EstablishmentComponent implements OnInit {
  establishment: establishment[] = [];
  // const ELEMENT_DATA: establishment[] = this.service.findAll();
  constructor(private _liveAnnouncer: LiveAnnouncer, public dialog: MatDialog, private service: EstablishmentService) {

  }
  dataSource: any;
  displayedColumns: any;
  establishmentToBeUpdated!: establishment;
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

    this.service.findAll().subscribe(data => {
      console.log(data)
      this.establishment = data;
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.sort = this.sort;
    })
    this.displayedColumns = ["id", "name", "email", "ice", "tel", "adresse","update","delete"]
    // ,"adresse" ,"ville"  ,"email"  ,"descc"  ,"web"  ,"ice"  ,"rc"  ,"patente"  ,"cnss"  ,"ifs"  ,"tel"  ,"portable"  ,"banque" ,"agence"  ,"rib"  ,"image"  ,"userId"  ,"createdAt"  ,"updatedAt"   ,"centres"
  }

  refresh(id:number){
    this.establishment = this.establishment.filter(e => e.id !== id);
    this.dataSource = new MatTableDataSource(this.establishment);
  }
  delete(id:number){
 
    const dialogRef = this.dialog.open(DialogComponent);

    dialogRef.afterClosed().subscribe(result => {
     if (result) {
     if (  this.service.deleteById(id)) {
       this.refresh(id);
      
     }
      
      
      
     }
    
    });
  
}
update(establishment:establishment){
  const dialogConfig = new MatDialogConfig();
  this.establishmentToBeUpdated=establishment;
  dialogConfig.data = this.establishmentToBeUpdated;
  const dialogRef = this.dialog.open(EstablishmentDialogComponent,{
    data:establishment
  });

    dialogRef.afterClosed().subscribe(result => {
    this.service.saveOrUpdate(result);
    });
}
  openDialog() {
    const dialogRef = this.dialog.open(EstablishmentDialogComponent,);
    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        
        console.log('Dialog closed with result:', result);
        this.service.saveOrUpdate(result);
        window.location.reload();
        // Handle the result data from the dialog, e.g., update the dataSource
        // this.dataSource.push(result); // Update dataSource as per your requirements
      } else {  
        console.log('Dialog closed without result');
      }

    });
  }
}


