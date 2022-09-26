import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-card-image',
  templateUrl: './card-image.component.html',
  styleUrls: ['./card-image.component.scss'],
})
export class CardImageComponent implements OnInit {
  constructor() {}
  @Input() cardImage!: FormControl<string>;
  ngOnInit(): void {}
}
