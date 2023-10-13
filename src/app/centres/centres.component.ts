import {Component, OnInit} from '@angular/core';
import {Centers} from "./Centers";
import {CentersService} from "./centers.service";
import {HttpErrorResponse} from "@angular/common/http";

@Component({
  selector: 'app-centres',
  templateUrl: './centres.component.html',
  styleUrls: ['./centres.component.css']
})
export class CentresComponent implements OnInit{
  public centers! : Centers[];
  constructor(private centerservices : CentersService) {

  }
  public  getCenters():void{
    this.centerservices.getCenters().subscribe((response:Centers[])=>{this.centers=response},
      (error : HttpErrorResponse)=>{alert(error.message)});
  }

  ngOnInit(): void {
    this.getCenters();
  }
}
