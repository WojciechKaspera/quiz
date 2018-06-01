import {Component, Input, OnInit} from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {Question} from '../models/question.interface';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {User} from '../models/user.interface';

@Component({
  selector: 'app-quiz',
  styleUrls: ['./quiz.component.scss'],
  template:
      `
    <div class="main-box">
      <h1>User: {{user}}</h1>
      <app-header [questions]="questions" [currentQuestionIndex]="currentQuestionIndex" [timeLeft]="timer"></app-header>
      <app-question [questions]="questions" [currentQuestionIndex]="currentQuestionIndex"></app-question>
      <app-footer [questionQuantity]="questions.length" [currentQuestionIndex]="currentQuestionIndex" [timeleft]="timer"
                  (resetTimer)="onReset()" [questions]="questions"></app-footer>
    </div>
  `
})
export class QuizComponent implements OnInit {
  constructor(private quizService: QuizService, private userService: UserService, private router: Router) {
  }

  user;

  timer: number;

  questions: Question[] = [{
    id: 0,
    question: '',
    answers: [],
    category: []
  }];

  onReset() {
    clearInterval(this.timerFn);
  }

  timerFn;

  runTimer() {
    this.timerFn = setInterval(() => {
      this.timer++;
    }, 1000);
  }

  currentQuestionIndex = 0;

  ngOnInit() {
    this.user = this.userService.getUser();
    if(!this.userService.getUser()) {
      this.router.navigateByUrl('user');
    }
    this.timer = 0;
    this.runTimer();
      this.quizService.getQuestions().subscribe((data: Question[]) => {
        this.questions = data;
        let questionsAmount = this.questions.length;
        let sortedQuestions: Question[] = [];
        let temp = 0;
        for (let i = 0; i < 10; i++) {
          let tempIndex = Math.floor(Math.random()*questionsAmount);
          let currentQuestion = this.questions[tempIndex];
          if(sortedQuestions.indexOf(currentQuestion) === -1) {
            sortedQuestions.push(currentQuestion);
          } else if (temp < 30) {
            temp++;
            i--;
          }
        }
        this.questions = sortedQuestions;
        this.quizService.numberOfQuestions = this.questions.length;
        let questionsIds = [];
        this.questions.forEach((element) => {
          questionsIds.push(element.id);
        });
        this.quizService.getAnswers(questionsIds);
      });
      this.quizService.changeQuestion.subscribe((index: number) => {
        this.currentQuestionIndex = index;
      });
  }

}
