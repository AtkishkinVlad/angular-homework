import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {
  TuiRootModule,
} from '@taiga-ui/core';
import { HttpClientModule } from '@angular/common/http';
import {WalletModule} from './app/wallet/wallet.module';
import { redirectInterceptorProviders } from './interceptor';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    TuiRootModule,
    WalletModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [redirectInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule {
}
