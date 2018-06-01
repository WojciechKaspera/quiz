import {Component, OnInit} from '@angular/core';
import {QuizService} from './services/quiz.service';
import {UserService} from './services/user.service';
import {Http} from '@angular/http';
import {Router} from "@angular/router";

@Component({
  selector: 'app-root',
  styleUrls: ['./app.component.scss'],
  template:
      `
    <div class="main-box">
      <router-outlet></router-outlet>
    </div>
  `
})
export class AppComponent implements OnInit {
  constructor(private userService: UserService) {
  }

  ngOnInit() {
    this.userService.user = this.userService.getUser();
  }
}
