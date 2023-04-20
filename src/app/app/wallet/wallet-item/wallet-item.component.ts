import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Purchase } from '../../../../shared/models/Purchase';
import { PurchasesService } from 'src/shared/services/purchases.service';

@Component({
  selector: 'app-wallet-item',
  templateUrl: './wallet-item.component.html',
  styleUrls: ['./wallet-item.component.less'],
})
export class WalletItemComponent {
  @Input()
  purchase!: Purchase;

  @Output()
  delete = new EventEmitter<Purchase>();

  showAdditionalInfo = false;
  editMode = false;

  constructor(public purchasesService: PurchasesService) {}

  get formattedPrice(): string {
    return `${this.purchase.price} ₽`;
  }

  toggleDisplay() {
    if (this.editMode) {
      this.editMode = false;
    }

    this.showAdditionalInfo = !this.showAdditionalInfo;
  }

  toggleEditMode() {
    event?.stopPropagation();
    this.editMode = !this.editMode;
  }

  onClick() {
    this.delete.next(this.purchase);
  }

  updatePurchase(purchase: Purchase): void {
    this.purchasesService.updatePurchase(this.purchase);
  }
}
