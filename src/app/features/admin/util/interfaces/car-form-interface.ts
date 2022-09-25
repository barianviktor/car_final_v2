import { FormArray, FormControl } from '@angular/forms';

export interface ICarForm {
  carType: FormControl<number | null>;
  color: FormControl<number | null>;
  price: FormControl<number | null>;
  transmission: FormControl<number | null>;
  motor: FormControl<number | null>;
  licensePlate: FormControl<string>;
  images: FormArray<FormControl<string>>;
  cardImage: FormControl<string>;
}
