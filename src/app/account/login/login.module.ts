import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent} from "./login.component";
import {RouterModule, Routes} from "@angular/router";
import {AccSharedModule} from "../acc-shared/acc-shared.module";
import {MaterialModule} from "../../material/material.module";

const routes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AccSharedModule,
    MaterialModule
  ],
  declarations: [
    LoginComponent
  ]
})
export class LoginModule { }
