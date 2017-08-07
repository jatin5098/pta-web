import { Component, OnInit } from '@angular/core';
import { TenantService } from '../../service/tenant.service';

@Component({
  selector: 'app-tenant-entry',
  templateUrl: './tenant-entry.component.html',
  styleUrls: ['./tenant-entry.component.css'],
  providers: [
  ]
})
export class TenantEntryComponent implements OnInit {
  tenant = {
    name: '',
    category: '',
    domain: ''
  };
  constructor(
    private TenantService: TenantService
  ) { 
  }

  ngOnInit() {
  }

  saveTenant = () => {
    this.TenantService.addTenantDetails(this.tenant);
  };
}
