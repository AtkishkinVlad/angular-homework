import { Component, Input, OnInit } from '@angular/core';

import { Product } from 'src/shared/models/Product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.less']
})
export class ProductComponent implements OnInit {
  @Input()
  product!: Product;

  constructor() { }

  ngOnInit(): void {
  }

  get formattedPrice(): string {
    return `${this.product.price} ₽`;
  }

  onClick() {
    
  }
}
