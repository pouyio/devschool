import { Component, OnInit } from '@angular/core';
import { Item } from '../models';
import { Input } from '@angular/core';
import { CartService } from '../services/cart.service';
import { ActivatedRoute } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { TemplateRef } from '@angular/core';


@Component({
  selector: 'dev-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {

  item: Item;
  modalRef: BsModalRef;

  constructor(
    private cartService: CartService,
    private route: ActivatedRoute,
    private modalService: BsModalService) { }

  ngOnInit() {
    this.item = this.route.snapshot.data.item;
  }

  addToCart(template: TemplateRef<any>) {
    this.cartService.addItem(this.item);
    this.modalRef = this.modalService.show(template);
    setTimeout(_ => this.modalRef.hide(), 2000);
  }

  removeFromCart() {
    this.cartService.removeItem(this.item.id);
  }

  itemIsInCart(): boolean {
    return this.cartService.isItemPresent(this.item.id);
  }

}
