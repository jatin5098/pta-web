import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {

  constructor(private router: Router) {

  }

  ngOnInit() {
  }

  loginAction = () => {
    this.router.navigateByUrl('/pa-dashboard');
  };
}
