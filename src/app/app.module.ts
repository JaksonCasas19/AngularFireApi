import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DeparmentComponent } from './deparment/deparment.component';
import { ShowDepComponent } from './deparment/show-dep/show-dep.component';
import { AddEditDepComponent } from './deparment/add-edit-dep/add-edit-dep.component';

@NgModule({
  declarations: [
    AppComponent,
    DeparmentComponent,
    ShowDepComponent,
    AddEditDepComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
