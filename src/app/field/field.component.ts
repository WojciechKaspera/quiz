import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormsModule, FormGroup, FormControl} from "@angular/forms";
import {QuizService} from "../services/quiz.service";
import {UserService} from "../services/user.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-field',
  styleUrls: ['./field.component.scss'],
  template:
  `
    <form [formGroup]="form" (ngSubmit)="submit()">
      <div *ngFor="let issue of issues">
        <mat-checkbox color="primary" [formControlName]="issue">{{issue}}</mat-checkbox>
      </div>
      <button mat-raised-button color="primary" type="button" (click)="submit()" routerLink="/quiz">Solve quiz</button>
    </form>
  `
})
export class FieldComponent implements OnInit {
  constructor(private fb: FormBuilder, private quizService: QuizService, private userService: UserService, private router: Router) { }

  form = this.fb.group({
  });

  submit() {
    this.quizService.pickedIssues = this.form.value;
}

  issues = ['JS', 'Angular', 'HTML', 'SCSS'];

  ngOnInit() {
    this.issues.forEach((element) => {
      this.form.addControl(element, this.fb.control({}));
    });
    if (!this.userService.loggedIn) {
      this.router.navigateByUrl('account');
    }
  }

}
