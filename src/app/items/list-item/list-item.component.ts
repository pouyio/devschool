import { Component, OnInit, EventEmitter } from '@angular/core';
import { Item } from '../../models';
import { Output } from '@angular/core';
import { Input } from '@angular/core';
import { ItemsService } from '../../services/items.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'dev-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  items$: Observable<Item[]>;
  filterAvailable: boolean;
  filterActive: boolean;

  constructor(private itemsService: ItemsService, private router: Router) {
    this.items$ = this.itemsService.getItems();
   }

  ngOnInit() {
  }

}
