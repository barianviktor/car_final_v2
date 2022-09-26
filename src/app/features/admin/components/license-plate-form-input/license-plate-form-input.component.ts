import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-license-plate-form-input',
  templateUrl: './license-plate-form-input.component.html',
  styleUrls: ['./license-plate-form-input.component.scss'],
})
export class LicensePlateFormInputComponent implements OnInit {
  @Input() licensePlate!: FormControl<string>;

  constructor() {}

  ngOnInit(): void {}
}
