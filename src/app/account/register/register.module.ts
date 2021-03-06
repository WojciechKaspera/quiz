import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegisterComponent } from './register.component';
import {RouterModule, Routes} from "@angular/router";
import {AccSharedModule} from "../acc-shared/acc-shared.module";
import {MaterialModule} from "../../material/material.module";

const routes: Routes = [
  {path: '', component: RegisterComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AccSharedModule,
    MaterialModule
  ],
  declarations: [RegisterComponent]
})
export class RegisterModule { }
