import {Component, EventEmitter, Output} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Purchase} from '../../../../shared/models/Purchase';

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent {
  @Output()
  add = new EventEmitter<Purchase>();

  form = new FormGroup({
    input1: new FormControl(null, Validators.required),
    input2: new FormControl(null, [Validators.required, Validators.max(1000)])
  });

  submit(): void {
    this.add.emit({
      title: this.form.get('input1')?.value,
      price: Number(this.form.get('input2')?.value)
    });

    this.form.reset();
  }

}
