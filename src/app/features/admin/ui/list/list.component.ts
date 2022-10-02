import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  @Output() selectedItem = new EventEmitter<number>();
  @Input() list$!: Observable<any>;
  @Input() selectedValue!: number | null | undefined;

  constructor() {}

  ngOnInit(): void {}
  handleSelectMotor(id: number) {
    this.selectedItem.emit(id);
  }
}
