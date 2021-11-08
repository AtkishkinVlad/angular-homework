import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {WalletComponent} from './wallet.component';
import {WalletItemComponent} from './wallet-item/wallet-item.component';
import {TuiBadgeModule, TuiInputModule} from '@taiga-ui/kit';
import {WalletAddComponent} from './wallet-add/wallet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';
import {IPurchasesApiService, IPurchasesApiServiceToken} from '../../../shared/interfaces/IPurchasesApiService';
import {PurchasesMockApiService} from '../../../shared/services/purchasesMockApi.service';
import {HttpClientModule} from '@angular/common/http';
import {PurchasesApiService} from '../../../shared/services/purchasesApi.service';

@NgModule({
  declarations: [
    WalletComponent,
    WalletItemComponent,
    WalletAddComponent
  ],
  exports: [
    WalletComponent
  ],
  imports: [
    CommonModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    HttpClientModule
  ],
  providers: [
    // {provide: IPurchasesApiServiceToken, useClass: PurchasesMockApiService}
    {provide: IPurchasesApiServiceToken, useClass: PurchasesApiService}
  ]
})
export class WalletModule {
}
