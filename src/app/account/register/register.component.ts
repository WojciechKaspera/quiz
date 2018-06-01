import {Component, OnInit} from '@angular/core';
import {UserService} from "../../services/user.service";

@Component({
  selector: 'app-register',
  styleUrls: ['./register.component.scss'],
  template:
      `
    <a mat-fab color="primary" routerLink="" class="go-back-btn">Go Back</a>
    <app-acc-shared (userChange)="register($event)" [registered]="registered" [registerError]="registerError">
      <span>Register</span>
    </app-acc-shared>
  `
})
export class RegisterComponent implements OnInit {

  constructor(private userService: UserService) {
  }

  registered;

  registerError;

  register(event) {
    this.userService.registerUser(event);
  }

  ngOnInit() {
    this.registered = false;
    this.registerError = false;
    this.userService.registered.subscribe((data) => {
      this.registered = data;
    });
    this.userService.registerError.subscribe((data) => {
      this.registerError = data;
    });
  }

}
