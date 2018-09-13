import { Injectable } from '@angular/core';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private isLogged: boolean;

  constructor() {
    this.isLogged = false;
  }

  login(password: string): Observable<boolean> {
    this.isLogged = password === 'asd';
    return of(this.isLogged);
  }

  isLoggedIn() {
    return this.isLogged;
  }
}
