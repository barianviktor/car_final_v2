import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-price-form-input',
  templateUrl: './price-form-input.component.html',
  styleUrls: ['./price-form-input.component.scss'],
})
export class PriceFormInputComponent implements OnInit {
  @Input() price!: FormControl<number | null>;

  constructor() {}

  ngOnInit(): void {}
}
