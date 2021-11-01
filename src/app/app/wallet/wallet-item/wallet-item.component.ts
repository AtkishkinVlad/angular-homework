import {Component, Input} from '@angular/core';
import {Purchase} from '../../../../shared/models/Purchase';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less']
})
export class WalletItemComponent {
  @Input()
  purchase!: Purchase;

  constructor() {
  }

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }
}
