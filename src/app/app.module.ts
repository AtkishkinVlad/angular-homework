import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  TuiButtonModule,
  TuiRootModule,
} from '@taiga-ui/core';
import {WalletModule} from './app/wallet/wallet.module';
import { ProductsModule } from './products/products.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    WalletModule,
    ProductsModule,
    AppRoutingModule,
    TuiButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
