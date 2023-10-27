import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MatTableModule} from '@angular/material/table';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from "@angular/material/button";
import {MatIconModule} from "@angular/material/icon";
import {MatAutocompleteModule} from "@angular/material/autocomplete";
import {MatToolbarModule} from "@angular/material/toolbar";

import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { TableComponent } from './utility/table/table.component';
import { MatSortModule } from '@angular/material/sort';
import {MatCardModule} from '@angular/material/card';

import {MatInputModule} from '@angular/material/input';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { MenubarComponent } from './utility/menubar/menubar.component';
import { CardComponent } from './utility/card/card.component';
import { CenterComponent } from './component/center/center.component';

@NgModule({
  declarations: [
    AppComponent,
    MenubarComponent,
    TableComponent,
    CardComponent,
    CenterComponent
    
    
  ],
  imports: [
    HttpClientModule,
    MatInputModule,
    MatCardModule,
    MatSortModule,
    MatTableModule,
    MatListModule,
    MatSidenavModule,
    BrowserModule,
    AppRoutingModule,
    MatToolbarModule,
    BrowserAnimationsModule,
    MatAutocompleteModule,
    MatIconModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
