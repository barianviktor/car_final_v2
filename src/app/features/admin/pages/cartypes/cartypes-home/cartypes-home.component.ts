import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { CartypeService } from 'src/app/services/cartype.service';
import { SmartcardService } from 'src/app/services/smartcard.service';
import { Icartypedto } from 'src/app/shared/interfaces/dto/icartypedto';

@Component({
  selector: 'app-cartypes-home',
  templateUrl: './cartypes-home.component.html',
  styleUrls: ['./cartypes-home.component.scss'],
})
export class CartypesHomeComponent implements OnInit {
  cartypes$: Observable<Icartypedto[]>;
  constructor(
    private cartypeService: CartypeService,
    private articleService: ArticleService,
    private smartcardService: SmartcardService
  ) {
    this.cartypes$ = cartypeService.getCartypes$();
    cartypeService.getCartype$(1).subscribe((x) => console.log(x));
  }
  ngOnInit(): void {}
}
