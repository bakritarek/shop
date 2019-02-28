import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  username;
  categorys : any;
  category: any;
  g2= [];
  constructor(private router: Router, private categoryService: CategoryService) {
    this.getCategory();
  }
  Refresh() {
   this.username = localStorage.getItem('name');
  }
  getCategory() {
    this.categorys = [];
    this.categoryService.Category().subscribe(data => {

     this.categorys = data;
      console.log(this.categorys);
    });

  }
  ngOnInit() {
    this.Refresh();
    console.log(localStorage.getItem('salt'));
  }



}
