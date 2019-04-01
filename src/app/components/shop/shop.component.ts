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
  items =  [];
  selectedCategory;
  itemsize;
  systemid = localStorage.getItem('systemid');
  selectedItem;
  constructor(private router: Router, private categoryService: CategoryService, private itemsService: ItemsService) {
    this.getCategory();
    setTimeout(() => {

      this.getAllItems();
      console.log(this.items);
    }, 100);


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
      items.forEach((value => {
        this.item = {
          id: value.id,
          text1: value.text1,
          text2: value.text2,
          price: '500',
          itemno: value.itemno,
          photo: value.photo,
        };
        this.items.push(this.item);
      }));
      console.log(this.items.length);
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
      items.forEach((value => {
        this.item = {
          id: value.id,
          text1: value.text1,
          text2: value.text2,
          price: '500',
          itemno: value.itemno,
          photo: value.photo,
        };
        this.items.push(this.item);
      }));
    });
  }

  selectSubCat(parent: string, cat2) {

    this.itemsService.getSubCat(parent, cat2).subscribe(items => {
      items.forEach((value => {
        this.item = {
          id: value.id,
          text1: value.text1,
          text2: value.text2,
          price: '500',
          itemno: value.itemno,
          photo: value.photo,
        };
        this.items.push(this.item);
      }));
    });
  }
  selectSubSubCat(grandparent: string, parent: string, cat3: string) {
    this.itemsService.getSubSubCat(grandparent, parent, cat3).subscribe(items => {
      items.forEach((value => {
        this.item = {
          id: value.id,
          text1: value.text1,
          text2: value.text2,
          price: '500',
          itemno: value.itemno,
          photo: value.photo,
        };
        this.items.push(this.item);
      }));
      console.log(this.items.length);
    });
  }

  ItemDetail(id: number) {
    this.router.navigate(['/item-detail/' + id]);
  }

}
