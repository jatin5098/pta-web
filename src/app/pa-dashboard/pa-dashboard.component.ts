import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';

@Component({
  selector: 'app-pa-dashboard',
  templateUrl: './pa-dashboard.component.html',
  styleUrls: ['./pa-dashboard.component.css'],
  providers: [AuthenticationService]
})
export class PaDashboardComponent implements OnInit {
  currentRoute;
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.currentRoute = this.router.url;
  }

  ngOnInit() {
  }
  navigateTo = (url) => {
    this.currentRoute = url;
    this.router.navigateByUrl(url);
  };

  kickMeout = () => {
    this.authenticationService.logout();
    this.router.navigateByUrl('/app');
  };
}
