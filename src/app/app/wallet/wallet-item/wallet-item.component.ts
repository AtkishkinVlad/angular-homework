import {Component, Input, Output, EventEmitter} from '@angular/core';
import {Purchase} from '../../../../shared/models/Purchase';

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

  constructor() {
  }

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  onClick() {
    this.delete.next(this.purchase);
  }
}
