import { IPositionsApiService, IPositionsApiServiceToken } from 'src/shared/interfaces/IPositionsApiService';
import {Inject, Injectable} from '@angular/core';
import { Position } from '../models/Position';

@Injectable({
  providedIn: 'root'
})
export class PositionService {
  private _position: Position[] = [];

  constructor(
    @Inject(IPositionsApiServiceToken)
    private positionsApiService: IPositionsApiService
  ) {
  }

  get products(): Position[] {
    return this._position;
  }

  initialize() {
    this.positionsApiService.get().subscribe(position => {
      this._position = position;
    });
  }
}
