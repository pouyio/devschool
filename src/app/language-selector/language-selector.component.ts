import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'dev-language-selector',
  templateUrl: './language-selector.component.html',
  styleUrls: ['./language-selector.component.css']
})
export class LanguageSelectorComponent implements OnInit {

  @Output() languageChange: EventEmitter<string>;
  _language: string;

  constructor() {
    this.languageChange = new EventEmitter();
   }

  ngOnInit() {
  }

  onLanguageChange(language: string) {
    this._language = language;
    this.languageChange.emit(language);
  }


}
