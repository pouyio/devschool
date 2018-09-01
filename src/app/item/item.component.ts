import { Component, OnInit } from '@angular/core';
import { Item } from '../models';
import { Input } from '@angular/core';

@Component({
  selector: 'dev-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;
  added = false;

  constructor() { }

  ngOnInit() {
  }

  addToCart() {
    this.added = true;
    console.log('Added: ', this.item);
  }

  removeFromCart() {
    this.added = false;
    console.log('Removed: ', this.item);
  }

}
