import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { TransmissionService } from 'src/app/services/transmission.service';
import { Itransmission } from 'src/app/shared/interfaces/models/itransmission';

@Component({
  selector: 'app-transmission-form-list',
  templateUrl: './transmission-form-list.component.html',
  styleUrls: ['./transmission-form-list.component.scss'],
})
export class TransmissionFormListComponent implements OnInit {
  @Input() transmission!: FormControl<number | null>;
  transmissions$: Observable<Itransmission[]>;
  constructor(private transmissionService: TransmissionService) {
    this.transmissions$ = this.transmissionService.getTransmissions$();
  }
  handleSelectTransmission(id: number) {
    this.transmission.setValue(id);
    console.log(this.transmission.value);
  }
  ngOnInit(): void {}
}
