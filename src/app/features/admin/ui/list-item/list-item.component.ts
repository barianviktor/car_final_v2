import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss'],
})
export class ListItemComponent implements OnInit {
  @Input() selected: boolean = false;
  @Input() value: string = '';
  @Output() clicked = new EventEmitter<void>();
  constructor() {}

  ngOnInit(): void {}
  handleClicked() {
    this.clicked.emit();
  }
}
