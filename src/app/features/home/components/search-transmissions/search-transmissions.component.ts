import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { TransmissionService } from 'src/app/services/transmission.service';
import { Itransmission } from 'src/app/shared/interfaces/models/itransmission';

@Component({
  selector: 'app-search-transmissions',
  templateUrl: './search-transmissions.component.html',
  styleUrls: ['./search-transmissions.component.scss'],
})
export class SearchTransmissionsComponent implements OnInit {
  transmissions$: Observable<Itransmission[]>;
  @Output() selectEmitter = new EventEmitter<number>();
  @Input() currentValue: number | undefined = undefined;

  constructor(private transmissionService: TransmissionService) {
    this.transmissions$ = this.transmissionService.getTransmissions$();
  }
  selectTransmission(index: number) {
    this.selectEmitter.emit(index);
  }
  ngOnInit(): void {}
}
