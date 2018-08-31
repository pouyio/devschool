import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Output() languageChange: EventEmitter<string>;

  constructor() {
    this.languageChange = new EventEmitter();
   }

  ngOnInit() {
  }

  onlanguageChange(language: string) {
    this.languageChange.emit(language);
  }

}
