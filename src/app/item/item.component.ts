import { Component, OnInit } from '@angular/core';
import { Item } from '../models';
import { Input } from '@angular/core';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'dev-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  @Input() item: Item;

  constructor(private cartService: CartService) { }

  ngOnInit() {
  }

  addToCart() {
    this.cartService.addItem(this.item);
  }

  removeFromCart() {
    this.cartService.removeItem(this.item.id);
  }

  itemIsInCart(): boolean {
    return this.cartService.isItemPresent(this.item.id);
  }

}
