import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() languageChange: EventEmitter<string>;

  links: string[];

  constructor() {
    this.languageChange = new EventEmitter();
    this.links = [ 'home', 'favourites', 'profile'];
   }

  ngOnInit() {
  }

  onlanguageChange(language: string) {
    this.languageChange.emit(language);
  }

}
