import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {QuizComponent} from "./quiz.component";
import {FooterComponent} from "./footer/footer.component";
import {QuestionComponent} from "./question/question.component";
import {HeaderComponent} from "./header/header.component";
import {SharedModule} from "../shared/shared.module";
import {MaterialModule} from "../material/material.module";

const routes: Routes = [
  {path: '', component: QuizComponent}
]

@NgModule({
  imports: [
    SharedModule,
    CommonModule,
    RouterModule.forChild(routes),
    MaterialModule
  ],
  declarations: [
    QuizComponent,
    HeaderComponent,
    QuestionComponent,
    FooterComponent
  ]
})
export class QuizModule { }
