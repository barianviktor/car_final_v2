import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-cartype-form-list',
  templateUrl: './cartype-form-list.component.html',
  styleUrls: ['./cartype-form-list.component.scss'],
})
export class CartypeFormListComponent implements OnInit {
  @Input() carType!: FormControl<number | null>;
  constructor() {}

  ngOnInit(): void {}
}
