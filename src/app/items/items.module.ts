import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { itemsRoutedComponents, ItemsRoutingModule } from './items-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FilterAvailablePipe } from './filter-available.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ItemsRoutingModule,
    TranslateModule,
    ReactiveFormsModule
  ],
  declarations: [
    itemsRoutedComponents,
    FilterAvailablePipe
  ]
})
export class ItemsModule { }
