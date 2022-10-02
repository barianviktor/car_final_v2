import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MotorService } from 'src/app/services/motor.service';
import { Itransmission } from 'src/app/shared/interfaces/models/itransmission';

@Component({
  selector: 'app-motor-list',
  templateUrl: './motor-list.component.html',
  styleUrls: ['./motor-list.component.scss'],
})
export class MotorListComponent implements OnInit {
  @Output() selectedMotor = new EventEmitter<number>();
  motors$: Observable<Itransmission[]>;
  @Input() selectedValue!: number | null | undefined;
  constructor(private motorService: MotorService) {
    this.motors$ = this.motorService.getMotors$();
  }
  handleSelectMotor(id: number) {
    this.selectedMotor.emit(id);
  }
  ngOnInit(): void {}
}
