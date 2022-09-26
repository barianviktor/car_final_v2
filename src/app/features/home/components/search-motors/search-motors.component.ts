import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MotorService } from 'src/app/services/motor.service';
import { Imotor } from 'src/app/shared/interfaces/models/imotor';

@Component({
  selector: 'app-search-motors',
  templateUrl: './search-motors.component.html',
  styleUrls: ['./search-motors.component.scss'],
})
export class SearchMotorsComponent implements OnInit {
  motors$: Observable<Imotor[]>;
  @Output() selectEmitter = new EventEmitter<number>();
  @Input() currentValue: number | undefined = undefined;

  constructor(private motorService: MotorService) {
    this.motors$ = motorService.getMotors$();
  }

  ngOnInit(): void {}
  selectMotor(id: number) {
    this.selectEmitter.emit(id);
  }
}
