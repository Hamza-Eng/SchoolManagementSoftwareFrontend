import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './component/branch/branch.component';
import { CenterComponent } from './component/center/center.component';
import { ClassesComponent } from './component/classes/classes.component';
import { CycleComponent } from './component/cycle/cycle.component';
import { EstablishmentComponent } from './component/establishment/establishment.component';
import { StudentComponent } from './component/student/student.component';

const routes: Routes = [
  {path:"home",redirectTo : "/"},
  {path:"center",component:CenterComponent},
  {path:"cycle",component:CycleComponent},
  {path:"student",component:StudentComponent},
  {path:"class",component:ClassesComponent},
  {path:"establishment",component:EstablishmentComponent},
  {path:"branch",component:BranchComponent},
  {path:"**",redirectTo : "home"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
