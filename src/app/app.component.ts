import { Component } from '@angular/core';

@Component({
  selector: 'dev-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'devschool';
  language: string;
  selected: string;
}
