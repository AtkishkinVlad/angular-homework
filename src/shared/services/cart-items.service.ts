import { Injectable } from '@angular/core';
import { Product } from '../models/Product';

@Injectable({
  providedIn: 'root'
})
export class CartItemsService {
  private cartItems: Product[] = []

  addItem(item: Product, count: number) {
    const tmp: Product[] = [];
    tmp.fill(item, 0, count);
    this.cartItems.push(item);
  }

  itemFreq(targetItem: Product) {
    let count = 0;

    for (const item of this.cartItems) {
      if (item.title === targetItem.title) {
        count++;
      }
    }

    return count;
  }

  cartItemTotalPrice() {
    return this.cartItems.reduce((acc, curr) => acc += curr.price, 0);
  }

  deleteItem(item: Product) {
    const index = this.cartItems.indexOf(item);
    if (index !== -1) {
      this.cartItems.splice(index, 1);
    }
  }

  getItems() {
    return this.cartItems;
  }
}
