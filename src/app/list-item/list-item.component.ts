import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'dev-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items: any[];
  filterAvailable: boolean;

  constructor() {
    this.items = [
      {
        id: 1,
        name: 'armadura',
        price: 20,
        currency: 'EUR',
        available: true,
      },
      {
        id: 2,
        name: 'escudo',
        price: 29.6,
        currency: 'EUR',
        available: false,
      },
      {
        id: 3,
        name: 'casco',
        price: 15.9991,
        currency: 'USD',
        available: false,
      },
      {
        id: 4,
        name: 'pala',
        price: 9.99,
        currency: 'USD',
        available: true,
      },
      {
        id: 5,
        name: 'caballo',
        price: 980,
        currency: 'USD',
        available: true,
      }
    ];
   }

  ngOnInit() {
  }

}
