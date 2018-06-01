import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormBuilder, Validators} from '@angular/forms';
import {User} from "../../models/user.interface";

@Component({
  selector: 'app-acc-shared',
  styleUrls: ['./acc-shared.component.scss'],
  template:
      `
    <form [formGroup]="accountDetails" (ngSubmit)="send()">
      <div class="form-box">
        <mat-form-field>
          <input matInput type="email" placeholder="Type in your mail adress" formControlName="mail" required>
          <mat-error *ngIf="accountDetails.get('mail').invalid">{{getErrorMessage()}}</mat-error>
        </mat-form-field>
        <mat-form-field>
          <input matInput type="password" placeholder="Type in your password" formControlName="password" required>
        </mat-form-field>
      </div>
      <div class="button-box">
        <button mat-raised-button color="primary" [disabled]="accountDetails.invalid">
          <ng-content select="span"></ng-content>
        </button>
        <span *ngIf="loginError" class="error">Wrong password or user doesnt exist!</span>
        <span *ngIf="registered">User {{accountDetails.get('mail').value}} succesfully registered!</span>
        <span *ngIf="registerError" class="error">This user is already registered!</span>
      </div>
    </form>
  `
})
export class AccSharedComponent implements OnInit {

  constructor(private fb: FormBuilder) {
  }

  @Output()
  userChange: EventEmitter<User> = new EventEmitter();

  @Input()
  loginError;

  @Input()
    registered;

  @Input()
    registerError;

  accountDetails = this.fb.group({
    mail: ['', [Validators.required, Validators.email]],
    password: ['', Validators.required]
  });

  getErrorMessage() {
    return this.accountDetails.get('mail').hasError('required') ? 'You have to enter you email' : (this.accountDetails.get('mail').hasError('email') ? 'Invalid email' : '');
  }

  send() {
    this.userChange.emit(this.accountDetails.value);
  }

  ngOnInit() {
    this.loginError = false;
    this.registered = false;
    this.registerError = false;
  }

}
