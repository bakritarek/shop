import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
  invocation = new XMLHttpRequest();
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
      'Access-Control-Request-Headers':  '*',
      'Access-Control-Allow-Headers':  '*',
    })
  };
  LoginData: any;
  url = 'http://192.168.100.136/shop/web/app_dev.php/';
  handleError;
  constructor(private http: HttpClient) { }

  Login(companyno: string, password: string, systemid: string) {
    this.LoginData = {
      company_no: companyno,
      pswrd: password,
      systmId: systemid
    };
    return this.http.post(this.url + 'user/login/' + systemid, this.LoginData, this.httpOptions);
  }

  Logout(id: string) {
    localStorage.setItem('companyno', '');
    localStorage.setItem('systemid', '');
    localStorage.setItem('companyname', '');

    return 1;
  }
  UpdateData() {
    return this.http.get(this.url + 'portal/');
  }
}
