import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpClientModule} from '@angular/common/http';
import {catchError} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class AuthService {
   httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  LoginData: any;
  url = 'http://192.168.100.136/shop/web/app_dev.php/';
  handleError;
  constructor(private http: HttpClient) { }

  Login(username: string, password: string, systemid: string) {
    this.LoginData = {
      login: username,
      pswrd: password,
      systmId: systemid
    };
    return this.http.post(this.url + 'user/login', this.LoginData, this.httpOptions);
  }

  Logout(id: string) {
    localStorage.setItem('username', '');
    localStorage.setItem('systemid', '');
    localStorage.setItem('name', '');
    localStorage.setItem('stillLoged', '');
    localStorage.setItem('updatedElements', '0');
    localStorage.setItem('view', '');

    return 1;
  }
  UpdateData() {
    return this.http.get(this.url + 'portal/');
  }
}
