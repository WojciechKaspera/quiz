import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Question} from '../../models/question.interface';
import {QuizService} from "../../services/quiz.service";
import {Router} from "@angular/router";
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-footer',
  styleUrls: ['./footer.component.scss'],
  template:
      `
    <div class="button-box">
      <button
        mat-raised-button color="primary"
        *ngFor="let answer of questions[currentQuestionIndex]?.answers; let i = index;"
        (click)="submitAnswer(letters[i], this.currentQuestionIndex)">{{letters[i]}}
      </button>
    </div>
  `
})
export class FooterComponent implements OnInit {
  constructor(private quizService: QuizService) {
  }

  @Input()
  questions: Question[];

  @Input()
  timeleft;

  @Output()
  resetTimer: EventEmitter<any> = new EventEmitter();

  submitAnswer(answer, questionIndex) {
    if (questionIndex === (this.questionQuantity - 1)) {
      this.resetTimer.emit();
      this.quizService.submitAnswer(answer, questionIndex);
      this.quizService.finish(this.timeleft);
      return;
    }
    this.quizService.submitAnswer(answer, questionIndex);
    this.quizService.nextQuestion();
  }

  @Input()
  questionQuantity: number;

  @Input()
  currentQuestionIndex = 0;

  letters: string[] = ['A', 'B', 'C', 'D', 'E', 'F'];

  ngOnInit() {
  }

}
