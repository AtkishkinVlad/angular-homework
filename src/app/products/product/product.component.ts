import { Component, Input, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

import { Product } from 'src/shared/models/Product';
import { CartItemsService } from 'src/shared/services/cart-items.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;

  testForm = new FormGroup({
    testValue: new FormControl(0),
  });

  constructor(public cartItemsService: CartItemsService) { }

  ngOnInit(): void {
  }

  get formattedPrice(): string {
    return `${this.product.price} ₽`;
  }

  submit() {
    const itemCount = this.testForm.get('testValue')?.value;
    console.log(this.cartItemsService.getItems());
    if (itemCount) {
      this.cartItemsService.addItem(this.product, Number(itemCount))
    }
  }

  onClick() {

  }
}
