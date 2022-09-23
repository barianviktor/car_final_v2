import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { ColorService } from 'src/app/services/color.service';
import { Icolor } from 'src/app/shared/interfaces/models/icolor';

@Component({
  selector: 'app-colors-new',
  templateUrl: './colors-new.component.html',
  styleUrls: ['./colors-new.component.scss'],
})
export class ColorsNewComponent implements OnInit {
  colorForm: FormGroup;
  constructor(private colorService: ColorService, private fb: FormBuilder) {
    this.colorForm = fb.group({
      name: ['', [Validators.required]],
      color: ['', [Validators.required]],
    });
  }
  get name(): FormControl {
    return this.colorForm.get('name') as FormControl;
  }
  get color(): FormControl {
    return this.colorForm.get('color') as FormControl;
  }
  ngOnInit(): void {}

  onAddColor() {
    console.log(this.colorForm);
    if (this.colorForm.valid) {
      let color: Icolor = {
        ...this.colorForm.value,
      };
      this.colorService.addColor(color);
    } else {
      this.colorForm.markAllAsTouched();
    }
  }
}
