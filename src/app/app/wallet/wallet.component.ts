import { Purchase } from './../../../shared/models/Purchase';
import { Component, OnInit } from '@angular/core';
import { PurchasesService } from '../../../shared/services/purchases.service';

@Component({
  selector: 'app-wallet',
  templateUrl: './wallet.component.html',
  styleUrls: ['./wallet.component.less'],
})
export class WalletComponent implements OnInit {
  expanded = false;

  constructor(public purchasesService: PurchasesService) {}

  ngOnInit(): void {
    this.purchasesService.initialize();
  }

  addPurchase(purchase: Purchase): void {
    this.purchasesService.addPurchase(purchase);
    this.toggle();
  }

  delPurchase(purchase: Purchase): void {
    this.purchasesService.delPurchase(purchase);
  }

  toggle(): void {
    this.expanded = !this.expanded;
  }
}
