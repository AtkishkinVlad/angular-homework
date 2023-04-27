import { TuiBadgeModule } from '@taiga-ui/kit';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';
import {TuiInputModule} from '@taiga-ui/kit';
import { TuiButtonModule } from '@taiga-ui/core';

import { ProductComponent } from './product.component';

@NgModule({
  declarations: [ProductComponent],
  exports: [ProductComponent],
  imports: [CommonModule, ReactiveFormsModule, TuiInputModule, TuiBadgeModule, TuiButtonModule],
})
export class ProductModule {}
