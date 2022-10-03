import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { CartypeService } from 'src/app/services/cartype.service';
import { Icartypedto } from 'src/app/shared/interfaces/dto/icartypedto';
import { Icartype } from 'src/app/shared/interfaces/models/icartype';
import { ICartypeSearch } from 'src/app/shared/interfaces/models/icartype-search';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  queryParams: ICartypeSearch = {
    design: undefined,
    maker: undefined,
  };
  results$: Observable<Icartype[]>;
  constructor(
    private cartypeService: CartypeService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.results$ = this.cartypeService.getCartypeByParam$(this.queryParams);
  }

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(({ params }: Params) => {
      this.queryParams.design = params.design;
      this.queryParams.maker = params.maker;
      this.results$ = this.cartypeService.getCartypeByParam$(this.queryParams);
    });
  }

  setDesign(index: number) {
    this.queryParams.design == index
      ? (this.queryParams.design = undefined)
      : (this.queryParams.design = index);
    this.go();
  }
  setMaker(index: number) {
    this.queryParams.maker == index
      ? (this.queryParams.maker = undefined)
      : (this.queryParams.maker = index);
    this.go();
  }
  /*   setMotor(index: number) {
    this.queryParams.motor == index
      ? (this.queryParams.motor = undefined)
      : (this.queryParams.motor = index);
    this.go();
  }
  setTransmission(index: number) {
    this.queryParams.transmission == index
      ? (this.queryParams.transmission = undefined)
      : (this.queryParams.transmission = index);
    this.go();
  } */
  go() {
    this.router.navigate(['/search'], { queryParams: this.queryParams });
  }
}
