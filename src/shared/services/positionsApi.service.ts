import {IPurchasesApiService} from '../interfaces/IPurchasesApiService';
import {Purchase} from '../models/Purchase';
import {Observable} from 'rxjs';
import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {IPositionsApiService} from '../interfaces/IPositionsApiService';
import {Position} from '../models/Position';

export const host = 'http://tfs';

@Injectable()
export class PositionsApiService implements IPositionsApiService {
  constructor(private httpClient: HttpClient) {
  }

  search(searchText: string): Observable<Position[]> {
    return this.httpClient.get<Position[]>(`${host}/${searchText}`);
  }
}
