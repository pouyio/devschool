import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';
import { ItemResolver } from '../item-resolver.service';
import { EditComponent } from './edit/edit.component';

const itemsRoutes: Routes = [
  {
    path: '',
    component: ListItemComponent
  },
  {
    path: ':id',
    component: ItemComponent,
    resolve: {
      item: ItemResolver
    }
  },
  {
    path: ':id/edit',
    component: EditComponent,
    resolve: {
      item: ItemResolver
    }
  },
];

@NgModule({
  imports: [RouterModule.forChild(itemsRoutes)],
  exports: [RouterModule]
})
export class ItemsRoutingModule { }

export const itemsRoutedComponents = [
  ListItemComponent,
  ItemComponent,
  EditComponent
];
