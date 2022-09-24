import { Component, OnInit, Input } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { MakerService } from 'src/app/services/maker.service';
import { Imaker } from 'src/app/shared/interfaces/models/imaker';
import { ModelForm } from '../../util/models/ModelForm';

@Component({
  selector: 'app-model-form-input',
  templateUrl: './model-form-input.component.html',
  styleUrls: ['./model-form-input.component.scss'],
})
export class ModelFormInputComponent implements OnInit {
  makers$: Observable<Imaker[]>;
  @Input() modelForm!: ModelForm;
  @Input() makerForm!: FormControl;
  constructor(private makerService: MakerService) {
    this.makers$ = makerService.getMakers();
  }
  get maker(): FormControl {
    return this.modelForm.get('maker') as FormControl;
  }
  get name(): FormControl {
    return this.modelForm.get('name') as FormControl;
  }
  setMaker(makerId: number | undefined) {
    this.maker.setValue(makerId);
    this.makerForm.setValue(makerId);
  }
  ngOnInit(): void {}
}
