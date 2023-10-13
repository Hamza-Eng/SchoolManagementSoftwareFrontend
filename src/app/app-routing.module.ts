import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

import {LoginComponent} from "./login/login.component";
import {CentresComponent} from "./centres/centres.component";

const routes:Routes =[{path:"login", component:LoginComponent},
  {path:"centers", component: CentresComponent}]

@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),

    CommonModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
