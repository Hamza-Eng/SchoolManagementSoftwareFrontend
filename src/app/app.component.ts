import {Component, OnInit} from '@angular/core';
import {Centers} from "./centres/Centers";
import {CentersService} from "./centres/centers.service";
import {HttpErrorResponse} from "@angular/common/http";

import {error} from "@angular/compiler-cli/src/transformers/util";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
public centers! : Centers[];
 constructor(private centerservices : CentersService) {

 }
 public  getCenters():void{
   this.centerservices.getCenters().subscribe(data=>this.centers=data,
     (error : HttpErrorResponse)=>{alert(error.message)});
 }

  ngOnInit(): void {
   this.getCenters();
  }
}
