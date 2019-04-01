import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Item} from '../class/item';
import {Observable} from 'rxjs';

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
  AllItems(): Observable <Item[]> {
    this.Data = {
      user: localStorage.getItem('username'),
      salt: localStorage.getItem('salt'),
      systemid : localStorage.getItem('systemid'),
      request : 'get_all_category'
    };
    this.Data = JSON.stringify(this.Data);

    return this.http.post<Item[]>(this.url + 'display/' + localStorage.getItem('systemid'), this.Data, this.httpOptions);
  }

  getItemsBy(category: string): Observable <Item[]> {
    this.Data = {
      companyno: localStorage.getItem('companyno'),
      salt: localStorage.getItem('salt'),
      systemid : localStorage.getItem('systemid'),
      cat : category
    };
    this.Data = JSON.stringify(this.Data);
    return this.http.post<Item[]>(this.url + 'by-category-' + localStorage.getItem('systemid'),
      this.Data, this.httpOptions);
  }

  getSubCat(parent: string, cat: string): Observable<Item[]> {
    this.Data = {
      user: localStorage.getItem('username'),
      salt: localStorage.getItem('salt'),
      systemid : localStorage.getItem('systemid'),
      Parent : parent,
      Cat: cat
    };
    this.Data = JSON.stringify(this.Data);
    return this.http.post<Item[]>(this.url + 'by-sub-category-' + localStorage.getItem('systemid'),
      this.Data, this.httpOptions);
  }

  getSubSubCat(grandparent: string, parent: string, cat3: string): Observable<Item[]> {
    this.Data = {
      user: localStorage.getItem('username'),
      salt: localStorage.getItem('salt'),
      systemid : localStorage.getItem('systemid'),
      GrandParent : grandparent,
      Parent : parent,
      Cat: cat3
    };
    this.Data = JSON.stringify(this.Data);
    return this.http.post<Item[]>(this.url + 'by-sub-sub-category-' + localStorage.getItem('systemid'),
      this.Data, this.httpOptions);
  }

  getitemDetail(id: number) {
    return this.http.get(this.url + 'item-detail/' + id + '/' + localStorage.getItem('systemid'));
  }
}
