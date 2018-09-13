import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { Item } from './models';
import { Observable } from 'rxjs';
import { ItemsService } from './services/items.service';

@Injectable({
  providedIn: 'root'
})
export class ItemResolver implements Resolve<Item> {

  constructor(private itemsService: ItemsService) { }

  resolve(route: ActivatedRouteSnapshot ): Observable<Item> {
    return this.itemsService.getItem(+route.params.id);
  }
}
