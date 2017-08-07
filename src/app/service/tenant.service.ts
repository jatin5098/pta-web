import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { app } from '../app.constant';
import { AuthenticationService } from '../service/authentication.service';

@Injectable()
export class TenantService {
  baseUrl: String;
  tenantList: any[];
  constructor(
    private http: Http,
    private authenticationService: AuthenticationService
  ) {
    this.baseUrl = app.httpBaseUrl;
    this.tenantList = [];
    this.authenticationService.createAuthenticationHeaders();
  }

  addTenantDetails = (tenant) => {
    let endPoint = this.baseUrl + "/tenant/add";
    tenant = {
        name: 'jatin kumar',
        category: 'Category',
        domain: 'mydomain@xyz.com',
        creationDate: Date.now(),
        createdBy: 'User',
        status: 'Active'
    };
    return this.http
      .post(endPoint, tenant, this.authenticationService.reqHeader)
      .subscribe(
      data => {
        console.log(this.tenantList.length);
        this.tenantList.push(tenant);
        console.log(JSON.stringify(data))
      },
      error => alert(error),
      () => console.log("Finished /tenant/add")
      );

  };

  getAllTenant = () => {
    let endPoint = this.baseUrl + "/tenant/all";
    return this.http
      .get(endPoint, this.authenticationService.reqHeader)
      .map(res => res.json());
  };

  getAllTenantList = () => {
    return this.tenantList;
  }

  setTenantList = (list) => {
    this.tenantList = list;
  }

}
