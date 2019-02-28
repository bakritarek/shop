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
username;
password;
error;
  constructor(private Auth: AuthService, private router: Router, private zone: NgZone) { }

  ngOnInit() {
    if (localStorage.getItem('username')) {
      this.router.navigate(['/']);
    }
  }

  login() {
    this.Auth.Login(this.username, this.password, this.instance).subscribe(data => {
      if (data['code'] === 1) {
        localStorage.setItem('username', this.username);
        localStorage.setItem('name', data['name']);
        localStorage.setItem('systemid', this.instance);
        localStorage.setItem('id', data['id']);
        localStorage.setItem('stillLoged', '1');
        localStorage.setItem('updatedElements', '0');
        localStorage.setItem('salt', data['salt']);
        console.log(data);
        this.router.navigate(['/']);
        window.location.reload();

      }

    });
  }
}
