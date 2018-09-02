import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'dev-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  @Input() language: string;

  constructor() {
  }

  ngOnInit() {
  }

}
