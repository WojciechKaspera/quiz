import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from "../material/material.module";
import {PickUserComponent} from './pick-user.component';

const routes: Routes = [
  {path: '', component: PickUserComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    PickUserComponent
  ],
  exports: [
    PickUserComponent
  ]
})
export class PickUserModule { }
