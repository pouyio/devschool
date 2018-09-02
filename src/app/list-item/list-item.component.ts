import { Component, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../models';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { ItemsService } from '../services/items.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'dev-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items$: Observable<Item[]>;
  filterAvailable: boolean;

  @Input() language: string;
  @Output() selectedItem: EventEmitter<Item>;

  constructor(private itemsService: ItemsService) {
    this.selectedItem = new EventEmitter();
    this.items$ = this.itemsService.getItems();
   }

  ngOnInit() {
  }

  itemSelected(item: Item) {
    this.selectedItem.emit(item);
  }

}
