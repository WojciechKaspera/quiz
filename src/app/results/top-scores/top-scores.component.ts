import {Component, OnInit, Input} from '@angular/core';
import {TopListEntry} from '../../models/top-list-entry.interface';

@Component({
  selector: 'app-top-scores',
  styleUrls: ['./top-scores.component.scss'],
  template:
      `
    <div class="main-box">
      <table>
        <tr class="header-box">
          <td><span class="title">User name:</span></td>
          <td><span class="title">Score:</span></td>
          <td><span class="title">Time:</span></td>
        </tr>
        <tr *ngFor="let entry of topList; let i = index;">
          <td>
                <span class="name">
      {{i + 1}}: {{entry.name}} 
    </span>
          </td>
          <td>
                    <span class="score">
      {{entry.score}}%
    </span>
          </td>
          <td>
                    <span class="score">
          {{entry.timeleft | timer}}
        </span>
          </td>
        </tr>
      </table>
      <div class="entry" *ngFor="let entry of topList; let i = index;">
      </div>
    </div>
  `
})
export class TopScoresComponent implements OnInit {

  @Input()
  topList: TopListEntry[];

  constructor() {
  }

  ngOnInit() {
  }

}
