import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ResultsComponent} from './results.component';
import {RouterModule, Routes} from "@angular/router";
import {ScoreComponent} from "./score/score.component";
import {TopScoresComponent} from "./top-scores/top-scores.component";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";

const routes: Routes = [
  {path: '', component: ResultsComponent}
]

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    ResultsComponent,
    ScoreComponent,
    TopScoresComponent
  ]
})
export class ResultsModule { }
