import { Component, OnInit } from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {Router} from '@angular/router';
import {AuthService} from '../../services/auth.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
lang: string;
loged;
companyname = localStorage.getItem('companyname');

  constructor(private translate: TranslateService, private router: Router, private auth: AuthService) {
    this.lang = localStorage.getItem('lang');
    if (localStorage.getItem('companyno')) {
      this.loged = true;
    } else {
      this.loged = false;
    }
  }

  ngOnInit() {
  }

  changeLang(str: string) {
    localStorage.setItem('lang', str);
    this.lang = localStorage.getItem('lang');
    this.translate.use(str);
    window.location.reload();
  }

  Logout() {
    this.router.navigate(['/login']);
    return this.auth.Logout(localStorage.getItem('companyno'));

  }


}
