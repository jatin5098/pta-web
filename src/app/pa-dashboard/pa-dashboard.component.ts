import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pa-dashboard',
  templateUrl: './pa-dashboard.component.html',
  styleUrls: ['./pa-dashboard.component.css']
})
export class PaDashboardComponent implements OnInit {
  currentRoute;
  constructor(private router: Router) {
    this.currentRoute = this.router.url;
  }

  ngOnInit() {
  }

  navigateTo = (url) => {
    this.currentRoute = url;
    this.router.navigateByUrl(url);
  };
}
