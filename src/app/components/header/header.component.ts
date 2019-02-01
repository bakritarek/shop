import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
lang: string;

  constructor(private translate: TranslateService) {
    this.lang = localStorage.getItem('lang');
  }

  ngOnInit() {
  }

  changeLang(str: string) {
    localStorage.setItem('lang', str);
    this.lang = localStorage.getItem('lang');
    this.translate.use(str);
    window.location.reload();
  }
}
