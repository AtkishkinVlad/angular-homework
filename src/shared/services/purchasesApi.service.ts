import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../models/Purchase';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

const host = 'http://localhost:3000/purchases';

@Injectable()
export class PurchasesApiService implements IPurchasesApiService {
  constructor(private httpClient: HttpClient) {
  }

  add(purchase: Purchase): Observable<void> {
    return this.httpClient.post<void>(host, purchase);
  }

  delete(id: string): Observable<void> {
    return this.httpClient.delete<void>(`${host}/${id}`);
  }

  getAll(): Observable<Purchase[]> {
    return this.httpClient.get<Purchase[]>(host);
  }
}
