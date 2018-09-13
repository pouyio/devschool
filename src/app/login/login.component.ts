import { Component, OnInit } from '@angular/core';
import { LoginService } from '../login.service';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';

@Component({
  selector: 'dev-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  pass: string;

  constructor(private loginService: LoginService, private router: Router) { }

  onLogin() {
    this.loginService.login(this.pass).pipe(take(1)).subscribe(response => {
      if (response) {
        this.router.navigate(['/welcome']);
      }
    });
  }

}
