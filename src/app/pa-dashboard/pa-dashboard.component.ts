import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthenticationService } from '../service/authentication.service';
import { TenantService } from '../service/tenant.service';

@Component({
  selector: 'app-pa-dashboard',
  templateUrl: './pa-dashboard.component.html',
  styleUrls: ['./pa-dashboard.component.css'],
  providers: [
    AuthenticationService,
    TenantService
  ]
})
export class PaDashboardComponent implements OnInit {
  currentRoute: String;
  tenantList: any[];
  constructor(
    private router: Router,
    private authenticationService: AuthenticationService,
    private tenantService: TenantService
  ) {
    this.currentRoute = this.router.url;
    this.tenantList = [];
  }

  ngOnInit() {
    this.tenantService.getAllTenant()
      .subscribe(
        data => {
          this.tenantService.setTenantList(data);
          this.tenantList = this.tenantService.getAllTenantList();
        },
        error => console.error(error),
        () => console.info("Finished GET")
    );
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
