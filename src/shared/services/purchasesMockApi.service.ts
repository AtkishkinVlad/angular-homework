import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../models/Purchase';
import {Observable, of} from 'rxjs';
import {Injectable} from '@angular/core';

@Injectable()
export class PurchasesMockApiService implements IPurchasesApiService {
  add(purchase: Purchase): Observable<void> {
    throw new Error('not implemented!');
  }

  delete(id: string): Observable<void> {
    throw new Error('not implemented!');
  }

  getAll(): Observable<Purchase[]> {
    return of([
      {
        title: 'Проезд на метро',
        price: 40
      },
      {
        title: 'Iphone Pro Max XXL',
        price: 100500
      },
      {
        title: 'Доширак (острый)',
        price: 123
      },
      {
        title: 'Доширак',
        price: 100
      }
    ]);
  }
}
