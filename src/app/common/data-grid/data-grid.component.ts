import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  @Output() currentRoute = new EventEmitter();
  route;
  constructor(private router: Router) {
    this.route = this.router.url;
  }

  ngOnInit() {
    this.currentRoute.emit(this.route);
  }

}
