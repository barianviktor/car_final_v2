import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { MakerService } from 'src/app/services/maker.service';
import { Imaker } from 'src/app/shared/interfaces/models/imaker';

@Component({
  selector: 'app-makers-home',
  templateUrl: './makers-home.component.html',
  styleUrls: ['./makers-home.component.scss'],
})
export class MakersHomeComponent implements OnInit {
  makers$: Observable<Imaker[]>;
  constructor(private makerService: MakerService) {
    this.makers$ = makerService.getMakers();
  }
  ngOnInit(): void {}
}
