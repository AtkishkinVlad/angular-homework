import {Component, Output, EventEmitter, Inject, OnInit, OnDestroy} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {Observable, of, Subject} from 'rxjs';
import {catchError, debounce, debounceTime, filter, map, startWith, switchMap, takeUntil} from 'rxjs/operators';
import {Position} from '../../../../shared/models/Position';
import {Purchase} from '../../../../shared/models/Purchase';

class PositionComboboxItem {
  constructor(
    readonly position: Position
  ) {
  }

  toString(): string {
    return this.position.title;
  }
}

@Component({
  selector: 'app-wallet-add',
  templateUrl: './wallet-add.component.html',
  styleUrls: ['./wallet-add.component.less']
})
export class WalletAddComponent implements OnInit, OnDestroy {
  @Output()
  add = new EventEmitter<Purchase>();

  readonly search$ = new Subject<string>();
  readonly destroy$ = new Subject<void>();

  form = new FormGroup({
    input1: new FormControl(null, Validators.required),
    input2: new FormControl(null, Validators.required)
  });

  ngOnInit(): void {
    this.form.valueChanges
      .pipe(takeUntil(this.destroy$))
      .subscribe(changes => {
        const price = changes?.input1?.position?.price;

        if (!changes?.input1?.position) {
          return;
        }

        const input2 = this.form.get('input2') as FormControl;

        input2.setValue(price, {emitEvent: false});
      });
  }

  ngOnDestroy(): void {
    this.destroy$.next();
  }

  submit(): void {
    const input1Value = this.form.get('input1')?.value;

    this.add.emit({
      title: input1Value?.position ? input1Value?.position?.title : input1Value,
      price: Number(this.form.get('input2')?.value)
    });

    this.form.reset();
  }

  onSearchChange(searchQuery: string | null): void {
    this.search$.next(searchQuery!);
  }
}
