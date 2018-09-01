import { Component } from '@angular/core';
import { Item } from './models';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devschool';
  language: string;
  selectedLink: string;
  item: Item;

  selectedItem(item: Item) {
    this.selectedLink = 'item';
    this.item = item;
  }
}
