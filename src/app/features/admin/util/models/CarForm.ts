import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { ICarForm } from '../interfaces/car-form-interface';

export class CarForm extends FormGroup<ICarForm> {
  constructor() {
    super({
      carType: new FormControl(null, [Validators.required]),
      color: new FormControl(null, [Validators.required]),
      price: new FormControl(null, [Validators.required]),
      transmission: new FormControl(null, [Validators.required]),
      motor: new FormControl(null, [Validators.required]),
      licensePlate: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      cardImage: new FormControl('', {
        validators: [Validators.required],
        nonNullable: true,
      }),
      images: new FormArray<FormControl<string>>([]),
    });
  }
}
