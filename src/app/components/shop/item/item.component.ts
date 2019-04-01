import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {ItemsService} from '../../../services/items.service';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  constructor(private route: ActivatedRoute, private itemService: ItemsService) {
    this.getItemDetails();
  }
  id;
  item;
  systemid = localStorage.getItem('systemid');
  @ViewChild('mainPic') mainPic: ElementRef;
  ngOnInit() {
  }

  getItemDetails() {
    this.id = this.route.snapshot.paramMap.get('id');
    this.itemService.getitemDetail(this.id).subscribe(item => {
     this.item = item;
     console.log(item);
    });
  }

  ChangeMainPic(event, id) {
    this.mainPic.nativeElement.src = 'http://192.168.100.136/shop/web/items/' + this.systemid + '/' + id + '/' + event.url;
    console.log(event.url);
  }
}
