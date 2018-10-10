import { Injectable } from '@angular/core';
import { Observable, of, BehaviorSubject, Subject } from 'rxjs';
import { Item, CartItem } from '../models';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private items: CartItem[];
  private _items$: BehaviorSubject<CartItem[]>;

  constructor() {
    this.items = [];
    this._items$ = new BehaviorSubject(this.items);
  }

  getItems(): Observable<CartItem[]> {
    return this._items$.asObservable();
  }

  addItem(item: Item, quantity: number = 1) {
    this.items.push({ ...item, quantity });
    this._items$.next(this.items);
  }

  removeItem(id: number) {
    this.items = this.items.filter(i => i.id !== id);
    this._items$.next(this.items);
  }

  plus(id: number) {
    const index = this.items.findIndex((item: CartItem) => item.id === id);
    this.items[index].quantity++;
    this._items$.next(this.items);
  }

  minus(id: number) {
    const index = this.items.findIndex((item: CartItem) => item.id === id);
    const quantity = this.items[index];
    if (quantity) {
      this.items[index].quantity--;
      this._items$.next(this.items);
    }
  }

  isItemPresent(id: number): boolean {
    return this.items.some(item => item.id === id);
  }
}
