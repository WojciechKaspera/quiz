import {Component, OnInit} from '@angular/core';
import {User} from "../models/user.interface";
import {UserService} from "../services/user.service";
import {QuizService} from "../services/quiz.service";

@Component({
  selector: 'app-account',
  styleUrls: ['./account.component.scss'],
  template:
      `
    <button mat-raised-button color="primary" routerLink="login">Log in</button>
    <button mat-raised-button color="primary" routerLink="register">Register</button>
  `
})
export class AccountComponent implements OnInit {
  constructor(private userService: UserService, private quizService: QuizService) {
  }

  user: User = {
    mail: '',
    password: ''
  };

  logUser(userName) {
    this.user.mail = userName;
    this.userService.loginUser(this.user);
  }

  ngOnInit() {
    this.userService.user = {
      mail: '',
      password: ''
    };
  }

}
