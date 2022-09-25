import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {
  queryParams: {
    design: number | undefined;
    maker: number | undefined;
  } = {
    design: undefined,
    maker: undefined,
  };
  constructor(private router: Router) {}

  ngOnInit(): void {}

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
  go() {
    this.router.navigate(['/search'], { queryParams: this.queryParams });
  }
}
