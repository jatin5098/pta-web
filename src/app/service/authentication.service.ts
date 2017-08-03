import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { app } from '../app.constant';

@Injectable()
export class AuthenticationService {
  baseUrl: String;
  constructor(private http: Http) {
    this.baseUrl = app.httpBaseUrl;
  }

  validateUserLogin = (user) => {
    let endPoint = this.baseUrl + "/auth/user";
    return this.http
      .post(endPoint, user)
      .subscribe(
      data => console.log(JSON.stringify(data)),
      error => alert(error),
      () => console.log("Finished GET")
      );

  };
}