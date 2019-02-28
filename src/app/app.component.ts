import { Component } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private translate: TranslateService, private router: Router) {
    if (localStorage.getItem('lang')) {
      const lang = localStorage.getItem('lang');
      translate.setDefaultLang(lang);

      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use(lang);
    } else {
      translate.setDefaultLang('de');
      localStorage.setItem('lang', 'de');
      // the lang to use, if the lang isn't available, it will use the current loader to get them
      translate.use('de');
    }
  }
}
