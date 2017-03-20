import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { app } from '../app.constant';

@Injectable()
export class TenantService {
  baseUrl: String;
  constructor(private http: Http) {
    this.baseUrl = app.httpBaseUrl;
  }

  addTenantDetails = (tenant) => {
    let endPoint = this.baseUrl + "/tenant/add";
    return this.http
      .post(endPoint, tenant)
      .subscribe(
      data => console.log(JSON.stringify(data)),
      error => alert(error),
      () => console.log("Finished GET")
      );

  };

  getAllTenant = () => {
    let endPoint = this.baseUrl + "/tenant/all";
    return this.http
      .get(endPoint)
      .map(res => res.json());
  };

}
