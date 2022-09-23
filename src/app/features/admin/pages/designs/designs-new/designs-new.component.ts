import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  Validators,
  FormControl,
} from '@angular/forms';
import { DesignService } from 'src/app/services/design.service';
import { Idesign } from 'src/app/shared/interfaces/models/idesign';

@Component({
  selector: 'app-designs-new',
  templateUrl: './designs-new.component.html',
  styleUrls: ['./designs-new.component.scss'],
})
export class DesignsNewComponent implements OnInit {
  designForm: FormGroup;
  constructor(private designService: DesignService, private fb: FormBuilder) {
    this.designForm = fb.group({
      name: ['', [Validators.required]],
    });
  }
  get name() {
    return this.designForm.get('name') as FormControl;
  }
  ngOnInit(): void {}
  onSubmit() {
    if (this.designForm.valid) {
      let design: Idesign = {
        name: this.name.value,
      };
      this.designService.addDesign(design);
    }
  }
}
