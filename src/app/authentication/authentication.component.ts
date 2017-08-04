import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

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

  }

  ngOnInit() {
  }

  loginAction = () => {
    this.userName = 'jatin.kumar';
    this.password = 'password';
    let user = {
        userName: this.userName,
        password: this.password
    };
    this.authenticationService.validateUserLogin(user)
      .subscribe(
        data => this.authData = data,
        error => console.error(error),
        () => console.info("Finished GET")
      );
    if(this.authData) {
      localStorage.setItem('userName', this.authData.userName);
      localStorage.setItem('token', this.authData.token);
      
      this.router.navigateByUrl('/pa-dashboard');
    }
    
  };
}
