import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl } from '@angular/forms';
import { CarService } from 'src/app/services/car.service';
import { CarForm } from '../../../util/models/CarForm';

@Component({
  selector: 'app-cars-new',
  templateUrl: './cars-new.component.html',
  styleUrls: ['./cars-new.component.scss'],
})
export class CarsNewComponent implements OnInit {
  private carForm: CarForm = new CarForm();
  constructor(private carService: CarService) {}

  get carType(): FormControl {
    return this.carForm.get('carType') as FormControl;
  }

  get color(): FormControl {
    return this.carForm.get('color') as FormControl;
  }

  get price(): FormControl {
    return this.carForm.get('price') as FormControl;
  }
  get transmission(): FormControl {
    return this.carForm.get('transmission') as FormControl;
  }

  get motor(): FormControl {
    return this.carForm.get('motor') as FormControl;
  }

  get licensePlate(): FormControl {
    return this.carForm.get('licensePlate') as FormControl;
  }

  get cardImage(): FormControl {
    return this.carForm.get('cardImage') as FormControl;
  }

  get images(): FormArray<FormControl<string>> {
    return this.carForm.get('images') as FormArray<FormControl<string>>;
  }

  ngOnInit(): void {}
}
