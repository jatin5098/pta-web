import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers  } from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/Rx';
import { app } from '../app.constant';

@Injectable()
export class AuthenticationService {
    baseUrl: String;
    reqHeader;
    
    constructor(private http: Http) {
        this.baseUrl = app.httpBaseUrl;
        this.reqHeader;
    }

    createAuthenticationHeaders = () => {
        this.reqHeader = new RequestOptions({
            headers: new Headers({
                'Content-Type': 'application/json',
                'token': localStorage.getItem(app.token)
            })      
        });    
    }

    validateUserLogin = (user) => {
        this.createAuthenticationHeaders();
        let endPoint = this.baseUrl + "/auth/user";
        return this.http
            .post(endPoint, user, this.reqHeader)     
            .map(res => res.json());
    }
    
    validateAuthToken = (token) => {
        this.createAuthenticationHeaders();
        let endPoint = this.baseUrl + "/auth/token";
        return this.http
            .post(endPoint, {token}, this.reqHeader)     
            .map(res => res.json());
    }

    logout = () => {
        localStorage.clear();
    }
    
}