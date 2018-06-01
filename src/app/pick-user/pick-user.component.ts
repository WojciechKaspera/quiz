import {Component, OnInit} from '@angular/core';
import {UserService} from '../services/user.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-pick-user',
  styleUrls: ['./pick-user.component.scss'],
  template:
      `
    <div>
      <mat-form-field>
      <input matInput type="text" placeholder="Type in your name" required #userName>
      </mat-form-field>
      <button mat-raised-button color="primary" [disabled]="userName.value === ''" (click)="onLogin(userName.value)">Log in</button>
    </div>
  `
})
export class PickUserComponent implements OnInit {

  constructor(private userService: UserService, private router: Router) {
  }

  onLogin(username) {
    this.userService.loginUser(username);
  }

  ngOnInit() {
if(this.userService.getUser()) {
  this.router.navigateByUrl('quiz');
}
  }
}
