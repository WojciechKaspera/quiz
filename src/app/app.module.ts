import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {UserService} from './services/user.service';
import {QuizService} from './services/quiz.service';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import {AppComponent} from './app.component';
import {HttpModule} from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './material/material.module';
import {environment} from '../environments/environment';

const routes: Routes = [
  {path: '', redirectTo: 'user', pathMatch: 'full'},
  // {path: 'account', loadChildren: './account/account.module#AccountModule'},
  // {path: 'fields', loadChildren: './field/field.module#FieldModule'},
  {path: 'quiz', loadChildren: './quiz/quiz.module#QuizModule'},
  {path: 'user', loadChildren: './pick-user/pick-user.module#PickUserModule'},
  {path: 'results', loadChildren: './results/results.module#ResultsModule'},
  {path: '**', redirectTo: 'account', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    MaterialModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [
    UserService,
    QuizService
  ],
  bootstrap: [AppComponent],
  exports: []
})
export class AppModule {
}
