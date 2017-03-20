import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-data-grid',
  templateUrl: './data-grid.component.html',
  styleUrls: ['./data-grid.component.css']
})
export class DataGridComponent implements OnInit {
  route;
  @Input() dataList;
  @Output() currentRoute = new EventEmitter();
  constructor(private router: Router) {
    this.route = this.router.url;
  }

  ngOnInit() {
    this.currentRoute.emit(this.route);
  }
  viewTenantDashboard = (tenantId) => {
    this.router.navigateByUrl('/pa-dashboard/tenant-profile');
  };
}
