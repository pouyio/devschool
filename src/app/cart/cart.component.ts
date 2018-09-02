import { Component, OnInit } from '@angular/core';
import { CartService } from '../services/cart.service';
import { CartItem } from '../models';
import { Observable } from 'rxjs';

@Component({
  selector: 'dev-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  items$: Observable<CartItem[]>;

  constructor(private cartService: CartService) {
    this.items$ = this.cartService.getItems();
  }

  ngOnInit() {
  }

  getTotalAmount(items: CartItem[]): number {
    return items.reduce((acc: number, item: CartItem) => {
      return acc + item.quantity * item.price;
    }, 0);
  }

  remove(id: number) {
    this.cartService.removeItem(id);
  }

  downQuantity(id: number) {
    this.cartService.minus(id);
  }

  upQuantity(id: number) {
    this.cartService.plus(id);
  }

}
