import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AccSharedComponent } from './acc-shared.component';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from "../../material/material.module";

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MaterialModule
  ],
  declarations: [AccSharedComponent],
  exports: [
    AccSharedComponent
  ]
})
export class AccSharedModule { }
