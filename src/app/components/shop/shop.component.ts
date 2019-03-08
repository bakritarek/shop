import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {ItemsService} from '../../services/items.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  username;
  categorys: any;
  category: any;
  items: any;
  constructor(private router: Router, private categoryService: CategoryService, private itemsService: ItemsService) {
    this.getCategory();
    this.getAllItems();

  }
  Refresh() {
   this.username = localStorage.getItem('name');
  }
  getCategory() {
    this.categorys = [];
    this.categoryService.Category().subscribe(data => {

     this.categorys = data;
    });
  }
  getAllItems() {
    this.itemsService.AllItems().subscribe(items => {
      this.items = items;
    });
  }
  ngOnInit() {
    this.Refresh();
    console.log(localStorage.getItem('salt'));
  }



}
