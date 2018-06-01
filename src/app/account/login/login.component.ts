import {Component, OnInit} from '@angular/core';
import {User} from "../../models/user.interface";
import {UserService} from "../../services/user.service";
import {Form} from "@angular/forms";

@Component({
  selector: 'app-login',
  styleUrls: ['./login.component.scss'],
  template:
      `
    <a mat-fab color="primary" routerLink="" class="go-back-btn">Go Back</a>
    <app-acc-shared (userChange)="submit($event)" [loginError]="loginError">
      <span>Log in</span>
    </app-acc-shared>
  `
})
export class LoginComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  userData: User;

  loginError;

  handleUserChange(event) {
    this.userData = event;
  }

  submit(event) {
    this.userService.loginUser(event);
  }

  ngOnInit() {
    this.loginError = false;
    this.userService.loginError.subscribe((data: boolean) => this.loginError = data);
  }

}
