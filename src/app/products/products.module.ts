import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductModule } from './product/product.module';
import { ProductsComponent } from './products.component';
import { IPositionsApiServiceToken } from 'src/shared/interfaces/IPositionsApiService';
import { PositionsApiService } from 'src/shared/services/positionsApi.service';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductModule,
    ReactiveFormsModule
  ],
  exports: [
    ProductsComponent
  ],
  providers: [{provide: IPositionsApiServiceToken, useClass: PositionsApiService}]
})
export class ProductsModule { }
