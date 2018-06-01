import {Injectable, Output, EventEmitter, OnInit} from '@angular/core';
import {Http, Response} from '@angular/http';

import 'rxjs/add/operator/map';
import 'rxjs/add/operator/filter';
import {UserService} from "./user.service";
import {Router} from "@angular/router";
import {HttpClient} from "@angular/common/http";
import {Answer} from "../models/answer.interface";
import {AngularFireDatabase} from 'angularfire2/database';

@Injectable()

export class QuizService implements OnInit {

  constructor(private http: Http, private userService: UserService, private router: Router, private httpClient: HttpClient, private db: AngularFireDatabase) {
  }

  @Output() change: EventEmitter<string> = new EventEmitter();

  @Output() changeQuestion: EventEmitter<number> = new EventEmitter();

  properAnswers;

  answers: string[] = [];

  currentQuestionIndex = 0;

  pickedIssues = [];

  quizDone = false;

  numberOfQuestions;

  restartQuestions() {
    this.currentQuestionIndex = 0;
  }

  finish(timeleft) {
    this.quizDone = true;
    this.userService.score = {
      name: this.userService.getUser(),
      score: parseInt(this.checkAnswers()),
      timeleft: timeleft
    };
    this.answers = [];
    this.userService.updateTopScores(this.userService.score);
    this.router.navigateByUrl('results');
    // this.userService.updateTopScores(this.userService.score).subscribe(() => {
    //   this.router.navigateByUrl('results');
    // });
  }

  getAnswers(uuk) {
    const answersArray = [];
    this.db.list('answers').valueChanges().subscribe((data: Answer[]) => {
      uuk.forEach((element) => {
        answersArray.push(data.filter((answer) => {
          return (answer.id == parseInt(element));
        })[0]);
      });
    });
    this.properAnswers = answersArray;
  }

  nextQuestion() {
    this.currentQuestionIndex++;
    this.changeQuestion.emit(this.currentQuestionIndex);
  }

  checkAnswers() {
    let score = 0;
    this.answers.map((answer: string, index) => {
      if ((answer === this.properAnswers[index].answer) && (answer != '')) {
        score++;
      }
    });
    score /= this.numberOfQuestions;
    return (score * 100).toFixed(0);
  }

  submitAnswer(answer, questionIndex) {
    this.answers[questionIndex] = answer;
  }

  getQuestions() {
    return this.db.list('questions').valueChanges();
  }

  ngOnInit() {
  }

}
