import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from './utility/menubar/menubar.component';

const routes: Routes = [
  {path:"home",component:MenubarComponent},
  {path:"center",component:MenubarComponent},
  {path:"cycle",component:MenubarComponent},
  {path:"student",component:MenubarComponent},
  {path:"establishment",component:MenubarComponent},
  {path:"branch",component:MenubarComponent},
  {path:"**",redirectTo : "home"},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
