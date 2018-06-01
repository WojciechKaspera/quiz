import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {AccountComponent} from './account.component';
import {RouterModule, Routes} from '@angular/router';
import {MaterialModule} from "../material/material.module";
import { AccSharedModule } from './acc-shared/acc-shared.module';

const routes: Routes = [
  {path: '', component: AccountComponent},
  {path: 'login', loadChildren: './login/login.module#LoginModule'},
  {path: 'register', loadChildren: './register/register.module#RegisterModule'},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AccSharedModule,
    MaterialModule
  ],
  declarations: [
    AccountComponent
  ],
  exports: [
    AccountComponent
  ]
})
export class AccountModule { }
