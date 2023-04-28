import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  isOpenMainScreen: boolean = true;
  isOpenCart: boolean = false;

  openMainScreen() {
    this.isOpenCart = false;
    this.isOpenMainScreen = true;
  }

  openCart() {
    this.isOpenCart = true;
    this.isOpenMainScreen = false;
  }
}
