import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { WalletComponent } from './wallet.component';
import { WalletItemComponent } from './wallet-item/wallet-item.component';
import {TuiBadgeModule, TuiInputModule} from '@taiga-ui/kit';
import { WalletAddComponent } from './wallet-add/wallet-add.component';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiButtonModule, TuiTextfieldControllerModule} from '@taiga-ui/core';

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
    TuiButtonModule
  ]
})
export class WalletModule { }
