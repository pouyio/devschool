import { Component } from '@angular/core';
import { Item } from './models';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  language: string;
  selectedLink: string;
  item: Item;

  constructor(private translate: TranslateService) {
    this.translate.setDefaultLang('en');
    this.selectedLink = 'welcome';
  }

  selectedItem(item: Item) {
    this.selectedLink = 'item';
    this.item = item;
  }

  onLanguageChange(language: string) {
    this.translate.use(language);
  }
}
