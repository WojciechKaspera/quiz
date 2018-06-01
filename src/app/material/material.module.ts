import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatButtonModule} from "@angular/material";
import {MatInputModule} from "@angular/material";
import {MatCheckboxModule} from "@angular/material";
import {MatTableModule} from "@angular/material";

@NgModule({
  imports: [
    CommonModule,
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule
  ],
  declarations: [],
  exports: [
    MatButtonModule,
    MatInputModule,
    MatCheckboxModule,
    MatTableModule
  ]
})
export class MaterialModule { }
