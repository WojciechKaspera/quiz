import {EventEmitter, Injectable, Output} from '@angular/core';
import {User} from '../models/user.interface';
import {Http, RequestOptions, Response, Headers} from "@angular/http";
import 'rxjs/add/operator/map';
import {TopListEntry} from "../models/top-list-entry.interface";
import {Router} from "@angular/router";
import {AngularFireDatabase, AngularFireList} from 'angularfire2/database';

@Injectable()
export class UserService {

  constructor(private http: Http, private router: Router, private db: AngularFireDatabase) {
  }

  topScores: AngularFireList<object> = this.db.list('topScores/topScores');

  @Output()
  login: EventEmitter<User> = new EventEmitter();

  @Output()
  loginError: EventEmitter<boolean> = new EventEmitter();
  @Output()
  registered: EventEmitter<boolean> = new EventEmitter();
  @Output()
  registerError: EventEmitter<boolean> = new EventEmitter();

  user;

  score: TopListEntry;

  loggedIn = false;

  getTopScores() {
    return this.db.list('topScores/topScores').valueChanges();
  }

  registerUser(user: User) {
//     this.db.list('users').valueChanges().subscribe((data) => {
//   const userIndex = data.map((data2) => data2.mail).indexOf(user.mail);
//   if ((userIndex === -1)) {
//   // this.http.post('http://localhost:3000/users', user)
//   //   .map((response: Response) => response.json())
//   //   .subscribe();
//   this.registered.emit(true);
//   this.registerError.emit(false);
// } else {
//   this.registerError.emit(true);
//   this.registered.emit(false);
// }
// });
}

  updateTopScores(score: TopListEntry) {
    this.topScores.push(score);
    // return this.db.list('topScores').valueChanges().subscribe((element) => {
    //   console.log(element[element.length]);
    //   this.topScores.push(element);
    // })
  }

  startOver() {
    this.router.navigateByUrl('quiz');
  }

  getUser() {
    return localStorage.getItem('user');
  }

  loginUser(userName) {
    localStorage.setItem('user', userName)
    this.loggedIn = true;
    this.login.emit(userName)
    this.router.navigateByUrl('quiz');
  }
}
