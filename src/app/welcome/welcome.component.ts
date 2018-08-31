import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() language: string;

  translations: Map<string, object>;

  constructor() {
    this.translations = new Map();
    this.translations.set('welcome', {
      en: 'Welcome to DevShop!',
      es: 'Bienvenido a DevShop!'
    });
    this.translations.set('intro', {
      en: 'Where you can buy anything you imaging',
      es: 'Donde puedes comprar cualquier cosa que imagines'
    });
  }

  ngOnInit() {
  }

  translate(translationKey: string): string {
    const translation = this.translations.get(translationKey);
    return translation[this.language] ? translation[this.language] : translationKey;
  }

}
