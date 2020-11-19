import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavVarComponent } from './nav-var/nav-var.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    NavVarComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports:[
    NavVarComponent,
  ]
})
export class CoreModule { }
