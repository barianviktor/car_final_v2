import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { MakerService } from 'src/app/services/maker.service';
import { Imaker } from 'src/app/shared/interfaces/models/imaker';

@Component({
  selector: 'app-search-makers',
  templateUrl: './search-makers.component.html',
  styleUrls: ['./search-makers.component.scss'],
})
export class SearchMakersComponent implements OnInit {
  makers$: Observable<Imaker[]>;
  @Output() selectEmitter: EventEmitter<number> = new EventEmitter<number>();

  constructor(private makerService: MakerService) {
    this.makers$ = makerService.getMakers$();
  }
  selectMaker(index: number) {
    this.selectEmitter.emit(index);
  }
  ngOnInit(): void {}
}
