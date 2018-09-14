import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'dev-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  @Output() languageChange: EventEmitter<string>;
  _language: string;

  constructor(private translate: TranslateService) {
    this.languageChange = new EventEmitter();
   }

  ngOnInit() {
  }

  onLanguageChange(language: string) {
    this._language = language;
    this.languageChange.emit(language);
  }

  currentLang(): string {
    return this.translate.currentLang || this.translate.defaultLang;
  }


}
