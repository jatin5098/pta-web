import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { app } from '../app.constant';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css'],
  providers: [AuthenticationService]
})
export class AuthenticationComponent implements OnInit {
  userName: String;
  password: String;
  authData;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authData = {};
    this.authData.token = localStorage.getItem(app.token);
    this.authData.userName = localStorage.getItem(app.user.userName)
  }

  ngOnInit() {
    if(this.authData && this.authData.token) {
      console.warn('Validate for token if already set' + this.authData.userName);
      this.validateAuthToken(this.authData.token);
    }
  }

  loginAction = () => {
    this.userName = 'jatin.kumar';
    this.password = 'password';
    let user = {
        userName: this.userName,
        password: this.password
    };
    this.validateLogin(user);
  };

  validateLogin = (user) => {
    this.authenticationService.validateUserLogin(user)
        .subscribe(
          data => {
            this.authData = Object.create(data);
            localStorage.setItem('userName', this.authData.userName);
            localStorage.setItem(app.token, this.authData.token);      
            this.router.navigateByUrl('/pa-dashboard');
          },
          error => {
            console.error(error);
            this.router.navigateByUrl('/app');
          },
          () => console.info("Token created")
        );
  };
  
  validateAuthToken = (token) => {
    this.authenticationService.validateAuthToken(token)
        .subscribe(
          data => {
            this.authData = Object.create(data);
            if(this.authData.success) {
              localStorage.setItem('userName', this.authData.userName);
              localStorage.setItem(app.token, this.authData.token);      
              this.router.navigateByUrl('/pa-dashboard');
            } else {
              this.router.navigateByUrl('/app');
            }       
          },
          error => {
            console.error(error);
            this.router.navigateByUrl('/app');
          },
          () => console.info("Token created")
        );
  };
}