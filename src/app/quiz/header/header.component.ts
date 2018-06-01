import {Component, Input, OnInit} from '@angular/core';
import {Question} from '../../models/question.interface';

@Component({
  selector: 'app-header',
  styleUrls: ['./header.component.scss'],
  template:
      `
    <span class="counter">{{currentQuestionIndex + 1}}/{{questions.length}}</span>
    <span class="timer">Time: <span class="time">{{ timeLeft | timer}}</span></span>

  `
})
export class HeaderComponent implements OnInit {

  @Input()
  timeLeft = 0;

  @Input()
  questions: Question[];

  @Input()
  currentQuestionIndex = 0;

  constructor() {
  }

  ngOnInit() {
  }

}
