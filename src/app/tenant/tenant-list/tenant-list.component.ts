import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../service/tenant.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css'],
  providers: [
  ]
})
export class TenantListComponent implements OnInit {
  private tenantList: any[];
  constructor(
    private tenantService: TenantService
  ) {
    this.tenantList = [];
  }

  ngOnInit() {
    setTimeout(() => {
      this.tenantList = this.tenantService.getAllTenantList();
    }, 100);
  }
}
