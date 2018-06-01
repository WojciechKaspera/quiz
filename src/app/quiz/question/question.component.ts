import {Component, OnInit, Input} from '@angular/core';
import {Question} from '../../models/question.interface';
import {QuizService} from '../../services/quiz.service';

@Component({
  selector: 'app-question',
  styleUrls: ['./question.component.scss'],
  template:
      `
    <h1>
      {{questions[currentQuestionIndex]?.question}}
      <div class="answer-box">
              <span *ngFor="let answer of questions[currentQuestionIndex]?.answers; let i = index;">
        {{letters[i]}}: {{answer}} <br>  
      </span>
      </div>
    </h1>
  `
})
export class QuestionComponent implements OnInit {
  constructor(private quizService: QuizService) {}
  @Input()
  questions: Question[];

  @Input()
  currentQuestionIndex = 0;

  letters = ['A', 'B', 'C', 'D', 'E', 'F'];

  ngOnInit() {
  }

}
