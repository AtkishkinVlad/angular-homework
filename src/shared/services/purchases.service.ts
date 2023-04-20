import {Purchase} from '../models/Purchase';
import {Inject, Injectable} from '@angular/core';
import {IPurchasesApiService, IPurchasesApiServiceToken} from '../interfaces/IPurchasesApiService';

@Injectable({
  providedIn: 'root'
})
export class PurchasesService {
  private _purchases: Purchase[] = [];
  private _summary = 0;

  constructor(
    @Inject(IPurchasesApiServiceToken)
    private purchasesApiService: IPurchasesApiService
  ) {
  }

  get purchases(): Purchase[] {
    return this._purchases;
  }

  get summary(): number {
    return this._summary;
  }

  initialize() {
    this.purchasesApiService.getAll().subscribe(purchases => {
      this._purchases = purchases;
      this.updateSummary();
    });
  }

  addPurchase(purchase: Purchase): void {
    this.purchasesApiService.add(purchase).subscribe(() => {
      this.initialize();
    });
  }

  delPurchase(purchase: Purchase): void {
    this.purchasesApiService.delete(purchase.id!).subscribe(() => {
      this.initialize();
    });
  }

  updatePurchase(purchase: Purchase, id: string): void {
    this.purchasesApiService.update(purchase, id).subscribe(() => {
      this.initialize();
    });
  }

  private updateSummary(): void {
    this._summary = this._purchases.reduce((sum, p) => p.price + sum, 0);
  }
}
