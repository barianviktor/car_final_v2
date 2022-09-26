import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { DesignService } from 'src/app/services/design.service';
import { Idesign } from 'src/app/shared/interfaces/models/idesign';

@Component({
  selector: 'app-search-designs',
  templateUrl: './search-designs.component.html',
  styleUrls: ['./search-designs.component.scss'],
})
export class SearchDesignsComponent implements OnInit {
  designs$: Observable<Idesign[]>;
  @Output() selectEmitter: EventEmitter<number> = new EventEmitter<number>();
  @Input() currentValue: number | undefined = undefined;
  constructor(private designService: DesignService) {
    this.designs$ = designService.getDesigns$();
  }
  selectDesign(index: number) {
    this.selectEmitter.emit(index);
  }
  ngOnInit(): void {}
}
