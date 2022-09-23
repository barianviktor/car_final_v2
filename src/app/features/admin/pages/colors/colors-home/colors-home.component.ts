import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ColorService } from 'src/app/services/color.service';
import { Icolor } from 'src/app/shared/interfaces/models/icolor';

@Component({
  selector: 'app-colors-home',
  templateUrl: './colors-home.component.html',
  styleUrls: ['./colors-home.component.scss'],
})
export class ColorsHomeComponent implements OnInit {
  colors$: Observable<Icolor[]>;
  constructor(private colorService: ColorService) {
    this.colors$ = colorService.getColors();
  }
  ngOnInit(): void {}
}
