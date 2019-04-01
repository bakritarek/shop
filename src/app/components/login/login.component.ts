import {Component, NgZone, OnInit} from '@angular/core';
import {AuthService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {Auth} from '../../class/auth';
import {first} from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
instance;
companyno;
password;
error;
  constructor(private Auth: AuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.Auth.Login(this.companyno, this.password, this.instance).subscribe(data => {

      if (data['code'] === 1) {
        localStorage.setItem('companyno', this.companyno);
        localStorage.setItem('companyname', data['companyname']);
        localStorage.setItem('systemid', this.instance);
        this.router.navigate(['/']);
        window.location.reload();

      }

    });
  }
}
