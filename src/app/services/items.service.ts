import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ItemsService {

  constructor(private http: HttpClient) { }
  url =  'http://192.168.100.136/shop/web/app_dev.php/shop/items/';
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  };
  Data: any;
  AllItems() {
    this.Data = {
      user: localStorage.getItem('username'),
      salt: localStorage.getItem('salt'),
      systemid : localStorage.getItem('systemid'),
      request : 'get_all_category'
    };
    this.Data = JSON.stringify(this.Data);

    return this.http.post(this.url + 'display/' + localStorage.getItem('systemid'), this.Data, this.httpOptions);
  }
}
