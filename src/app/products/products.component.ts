import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PositionService } from 'src/shared/services/position.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.less']
})
export class ProductsComponent implements OnInit {
  public myForm: FormGroup = new FormGroup({});

  constructor(public positionService: PositionService) {
  }

  ngOnInit(): void {
    this.positionService.initialize();
  }
}
