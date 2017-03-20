import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../service/tenant.service';

@Component({
  selector: 'app-tenant-list',
  templateUrl: './tenant-list.component.html',
  styleUrls: ['./tenant-list.component.css'],
  providers: [TenantService]
})
export class TenantListComponent implements OnInit {
  private tenantList: any;
  constructor(private TenantService: TenantService) {
    this.TenantService.getAllTenant()
      .subscribe(
      data => this.tenantList = data,
      error => console.error(error),
      () => console.info("Finished GET")
      );
  }

  ngOnInit() {

  }

}
