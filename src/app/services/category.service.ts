import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }
  url =  'http://192.168.100.136/shop/web/app_dev.php/shop/category/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  Data: any;
  Category() {
    this.Data = {
      user: localStorage.getItem('username'),
      salt: localStorage.getItem('salt'),
      systemid: localStorage.getItem('systemid'),
      request : 'get_all_category'
    };
    this.Data = JSON.stringify(this.Data);

    return this.http.post(this.url + 'get_all', this.Data, this.httpOptions);
  }

  C2(id: string) {
    this.Data = {
      user: localStorage.getItem('username'),
      salt: localStorage.getItem('salt'),
      systemid: localStorage.getItem('systemid'),
      request : 'get_all_category'
    };
    this.Data = JSON.stringify(this.Data);

    return this.http.post(this.url + 'get_c2/' + id, this.Data, this.httpOptions);
  }

}
