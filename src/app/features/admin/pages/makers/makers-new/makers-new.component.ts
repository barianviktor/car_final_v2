import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MakerService } from 'src/app/services/maker.service';
import { Imaker } from 'src/app/shared/interfaces/models/imaker';

@Component({
  selector: 'app-makers-new',
  templateUrl: './makers-new.component.html',
  styleUrls: ['./makers-new.component.scss'],
})
export class MakersNewComponent implements OnInit {
  makerForm: FormGroup;
  constructor(
    private makerService: MakerService,
    private fb: FormBuilder,
    private router: Router
  ) {
    this.makerForm = fb.group({
      name: ['', [Validators.required]],
      icon_path: ['', [Validators.required]],
    });
  }
  get name(): FormControl {
    return this.makerForm.get('name') as FormControl;
  }
  get icon_path(): FormControl {
    return this.makerForm.get('icon_path') as FormControl;
  }
  onAddMaker() {
    if (this.makerForm.valid) {
      let maker: Imaker = {
        ...this.makerForm.value,
      };
      this.makerService.addMaker(maker);
    } else {
      this.makerForm.markAllAsTouched();
    }
  }
  ngOnInit(): void {}
}
