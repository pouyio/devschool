import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BsDropdownModule } from 'ngx-bootstrap/dropdown';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavbarComponent } from './navbar/navbar.component';
import { LanguageSelectorComponent } from './language-selector/language-selector.component';
import { ListItemComponent } from './list-item/list-item.component';
import { ItemComponent } from './item/item.component';
import { FilterAvailablePipe } from './filter-available.pipe';
import { TranslatePipe } from './translate/translate.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavbarComponent,
    LanguageSelectorComponent,
    ListItemComponent,
    ItemComponent,
    FilterAvailablePipe,
    TranslatePipe,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDropdownModule.forRoot()

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
