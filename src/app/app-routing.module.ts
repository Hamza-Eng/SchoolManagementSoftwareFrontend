import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BranchComponent } from './branch/component/branch.component';
import { CenterComponent } from './center/component/center.component';
import { ClassesComponent } from './classes/component/classes.component';
import { CycleComponent } from './cycle/component/cycle.component';
import { EstablishmentComponent } from './establishment/component/establishment.component';
import { StudentComponent } from './student/component/student.component';

const routes: Routes = [
  
  {path:"center",component:CenterComponent},
  {path:"cycle",component:CycleComponent},
  {path:"student",component:StudentComponent},
  {path:"class",component:ClassesComponent},
  {path:"establishment",component:EstablishmentComponent},
  {path:"branch",component:BranchComponent},
  {path:"**",redirectTo: "/establishment"},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
