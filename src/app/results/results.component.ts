import {Component, OnInit} from '@angular/core';
import {QuizService} from '../services/quiz.service';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';
import {TopListEntry} from '../models/top-list-entry.interface';

@Component({
  selector: 'app-results',
  styleUrls: ['./results.component.scss'],
  template:
      `
    <app-score></app-score>
    <app-top-scores
      [topList]="topScores"></app-top-scores>
    <div class="button-wrapper">
      <button mat-raised-button color="primary" (click)="startAgain()">Try again!</button>
    </div>
  `
})
export class ResultsComponent implements OnInit {

  constructor(private quizService: QuizService, private userService: UserService, private router: Router) {
  }

  topScores: TopListEntry[];

  startAgain() {
    this.quizService.restartQuestions();
    this.userService.startOver();
  }

  ngOnInit() {
    if(!this.userService.getUser()) {
      this.router.navigateByUrl('user');
    }
    this.userService.getTopScores().subscribe((data: TopListEntry[]) => {
      this.topScores = data.sort((a, b) => b.score - a.score === 0 ? a.timeleft - b.timeleft : b.score - a.score).slice(0, 10);
    });
  }
}
