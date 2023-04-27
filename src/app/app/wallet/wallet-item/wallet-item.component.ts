import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Purchase} from '../../../../shared/models/Purchase';
import { CartItemsService } from 'src/shared/services/cart-items.service';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent {
  @Input()
  purchase!: Purchase;

  @Output()
  delete = new EventEmitter<Purchase>();

  constructor(public cartItemService: CartItemsService) {
  }

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  onClick() {
    this.cartItemService.deleteItem(this.purchase);
  }
}
