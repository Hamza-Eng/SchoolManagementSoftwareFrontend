import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MenubarComponent } from './utility/menubar/menubar.component';

const routes: Routes = [
  {path:"home",component:MenubarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
