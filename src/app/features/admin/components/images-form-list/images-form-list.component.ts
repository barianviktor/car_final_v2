import { Component, OnInit, Input } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
  AbstractControl,
} from '@angular/forms';

@Component({
  selector: 'app-images-form-list',
  templateUrl: './images-form-list.component.html',
  styleUrls: ['./images-form-list.component.scss'],
})
export class ImagesFormListComponent implements OnInit {
  @Input() images!: FormArray;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    console.log(this.images);
  }
  addImage() {
    let imageController = new FormControl('', [Validators.required]);
    this.images.push(imageController);
  }
  removeImage(index: number) {
    this.images.removeAt(index);
  }
  castAbsToFc(e: AbstractControl) {
    return e as FormControl;
  }
}
