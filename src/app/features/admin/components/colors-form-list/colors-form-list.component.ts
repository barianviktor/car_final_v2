import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-colors-form-list',
  templateUrl: './colors-form-list.component.html',
  styleUrls: ['./colors-form-list.component.scss'],
})
export class ColorsFormListComponent implements OnInit {
  @Input() color!: FormControl<number | null>;

  constructor() {}

  ngOnInit(): void {}
}
