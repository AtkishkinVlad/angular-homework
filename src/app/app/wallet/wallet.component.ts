import {Component, OnInit} from '@angular/core';
import {PurchasesService} from '../../../shared/services/purchases.service';
import { CartItemsService } from 'src/shared/services/cart-items.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less']
})
export class WalletComponent implements OnInit {
  expanded = false;

  constructor(public purchasesService: PurchasesService, public cartItemService: CartItemsService) {
  }

  items = this.cartItemService.getItems();
  totalPrice = this.cartItemService.cartItemTotalPrice();

  ngOnInit(): void {
    this.purchasesService.initialize();
  }
}
