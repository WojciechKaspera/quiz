import { Component, OnInit } from '@angular/core';
import {QuizService} from "../../services/quiz.service";
import {TopListEntry} from "../../models/top-list-entry.interface";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-score',
  styleUrls: ['./score.component.scss'],
  template:
  `
  <div class="main-box">
    Your score: <span>{{result?.score}}%</span>
  </div>
  `
})
export class ScoreComponent implements OnInit {
  constructor(private quizService: QuizService, private userService: UserService) { }


  result: TopListEntry;

  ngOnInit() {
    this.result = this.userService.score;
  }

}
