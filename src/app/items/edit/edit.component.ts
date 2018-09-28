import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Item } from '../../models';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'dev-edit',
  templateUrl: './edit.component.html'
})
export class EditComponent implements OnInit {

  itemForm: FormGroup;
  item: Item;
  currencies = ['EUR', 'USD', 'YEN'];

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {
    this.item = this.route.snapshot.data.item;
  }

  ngOnInit() {
    this.itemForm = this.fb.group({
      name: [this.item.name, [Validators.required, Validators.minLength(4)]],
      description: [this.item.description, Validators.required],
      price: [this.item.price, Validators.required],
      currency: [this.item.currency, Validators.required],
      available: [this.item.available]
    });

    console.warn(this.itemForm);
  }

}
