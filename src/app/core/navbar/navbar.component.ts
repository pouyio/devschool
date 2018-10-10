import { Component, OnInit, EventEmitter, OnDestroy } from '@angular/core';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { map } from 'rxjs/operators';
import { CartItem } from '../../models';
import { Subscription } from 'rxjs';
import { LoginService } from '../../login.service';

@Component({
  selector: 'dev-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnDestroy {

  @Input() selected: string;
  @Output() selectedChange: EventEmitter<string>;
  @Output() languageChange: EventEmitter<string>;

  links: string[];
  cartLength = 0;
  private subscription: Subscription;

  constructor(private cartService: CartService) {
    this.languageChange = new EventEmitter();
    this.selectedChange = new EventEmitter();
    this.links = ['welcome', 'list', 'login', 'cart'];
    this.selected = this.links[0];
    this.subscription = this.cartService.getItems().pipe(
      map((items: CartItem[]) => {
        return items.map(i => i.quantity).reduce((acc, quantity) => acc + quantity, 0);
      }
      )).subscribe(totals => this.cartLength = totals);
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onlanguageChange(language: string) {
    this.languageChange.emit(language);
  }

  select(link: string) {
    this.selected = link;
    this.selectedChange.emit(this.selected);
  }

}
