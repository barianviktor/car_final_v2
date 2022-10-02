import { Component, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { ColorService } from 'src/app/services/color.service';
import { Icolor } from 'src/app/shared/interfaces/models/icolor';

@Component({
  selector: 'app-colors-form-list',
  templateUrl: './colors-form-list.component.html',
  styleUrls: ['./colors-form-list.component.scss'],
})
export class ColorsFormListComponent implements OnInit {
  @Input() color!: FormControl<number | null>;
  colors$: Observable<Icolor[]>;
  constructor(private colorService: ColorService) {
    this.colors$ = colorService.getColors();
  }
  handleSelectColor(id: number) {
    this.color.setValue(id);
    console.log(this.color.value);
  }
  ngOnInit(): void {}
}
