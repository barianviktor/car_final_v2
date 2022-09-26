import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-motor-form-list',
  templateUrl: './motor-form-list.component.html',
  styleUrls: ['./motor-form-list.component.scss'],
})
export class MotorFormListComponent implements OnInit {
  @Input() motor!: FormControl<number | null>;

  constructor() {}

  ngOnInit(): void {}
}
