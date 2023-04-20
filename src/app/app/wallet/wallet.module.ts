import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import {
  TuiBadgeModule,
  TuiComboBoxModule,
  TuiDataListWrapperModule,
  TuiInputModule,
  TuiTextAreaModule,
} from '@taiga-ui/kit';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TuiButtonModule, TuiTextfieldControllerModule } from '@taiga-ui/core';
import { IPurchasesApiServiceToken } from '../../../shared/interfaces/IPurchasesApiService';
import { HttpClientModule } from '@angular/common/http';
import { PurchasesApiService } from '../../../shared/services/purchasesApi.service';
import { IPositionsApiServiceToken } from '../../../shared/interfaces/IPositionsApiService';
import { PositionsApiService } from '../../../shared/services/positionsApi.service';
import { TuiLetModule } from '@taiga-ui/cdk';

@NgModule({
  declarations: [WalletComponent, WalletItemComponent, WalletAddComponent],
  exports: [WalletComponent],
  imports: [
    CommonModule,
    FormsModule,
    TuiBadgeModule,
    ReactiveFormsModule,
    TuiInputModule,
    TuiTextfieldControllerModule,
    TuiButtonModule,
    HttpClientModule,
    TuiComboBoxModule,
    TuiLetModule,
    TuiDataListWrapperModule,
    TuiTextAreaModule
  ],
  providers: [
    { provide: IPurchasesApiServiceToken, useClass: PurchasesApiService },
    { provide: IPositionsApiServiceToken, useClass: PositionsApiService },
  ],
})
export class WalletModule {}
