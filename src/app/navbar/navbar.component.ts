import { Component, OnInit, EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  @Input() selected: string;
  @Output() selectedChange: EventEmitter<string>;
  @Output() languageChange: EventEmitter<string>;

  links: string[];

  constructor() {
    this.languageChange = new EventEmitter();
    this.selectedChange = new EventEmitter();
    this.links = [ 'welcome', 'list'];
    this.selected = this.links[0];
   }

  ngOnInit() {
  }

  onlanguageChange(language: string) {
    this.languageChange.emit(language);
  }

  select(link: string) {
    this.selected = link;
    this.selectedChange.emit(this.selected);
  }

}
