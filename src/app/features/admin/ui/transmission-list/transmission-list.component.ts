import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TransmissionService } from 'src/app/services/transmission.service';
import { Itransmission } from 'src/app/shared/interfaces/models/itransmission';

@Component({
  selector: 'app-transmission-list',
  templateUrl: './transmission-list.component.html',
  styleUrls: ['./transmission-list.component.scss'],
})
export class TransmissionListComponent implements OnInit {
  @Output() selectTransmission = new EventEmitter<number>();
  transmissions$: Observable<Itransmission[]>;
  @Input() selectedValue!: number | null | undefined;
  constructor(private transmissionService: TransmissionService) {
    this.transmissions$ = this.transmissionService.getTransmissions$();
  }
  handleSelectTransmission(id: number) {
    this.selectTransmission.emit(id);
  }
  ngOnInit(): void {}
}
