import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-transmission-form-list',
  templateUrl: './transmission-form-list.component.html',
  styleUrls: ['./transmission-form-list.component.scss'],
})
export class TransmissionFormListComponent implements OnInit {
  constructor() {}
  @Input() transmission!: FormControl<number | null>;

  ngOnInit(): void {}
}
