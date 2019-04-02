import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {CategoryService} from '../../services/category.service';
import {ItemsService} from '../../services/items.service';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {count} from 'rxjs/operators';
import {Item} from '../../class/item';
@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  username;
  categorys: any;
  category: any;
  item: Item;
  items: any;
  selectedCategory;
  itemsize;
  systemid = localStorage.getItem('systemid');
  selectedItem;
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
      console.log(data);
      this.categorys = data;
    });
  }
  getAllItems() {
    this.itemsService.AllItems().subscribe(items => {
      this.items = items;
      console.log(this.items);
    });
  }
  ngOnInit() {
    this.Refresh();
    console.log(localStorage.getItem('companyno'));
  }

  selectCat(cat: string) {

    if (this.selectedCategory !== cat) {
      this.selectedCategory = cat;
    }

    this.itemsService.getItemsBy(this.selectedCategory).subscribe(items => {
     this.items = items;
    });
  }

  selectSubCat(parent: string, cat2) {

    this.itemsService.getSubCat(parent, cat2).subscribe(items => {
     this.items = items;
    });
  }
  selectSubSubCat(grandparent: string, parent: string, cat3: string) {
    this.itemsService.getSubSubCat(grandparent, parent, cat3).subscribe(items => {
     this.items = items;
    });
  }

  ItemDetail(id: number) {
    this.router.navigate(['/item-detail/' + id]);
  }

}
