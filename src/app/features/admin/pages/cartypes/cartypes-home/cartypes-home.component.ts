import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { ArticleService } from 'src/app/services/article.service';
import { CartypeService } from 'src/app/services/cartype.service';
import { SmartcardService } from 'src/app/services/smartcard.service';
import { Icartypedto } from 'src/app/shared/interfaces/dto/icartypedto';
import { Icartype } from 'src/app/shared/interfaces/models/icartype';

@Component({
  selector: 'app-cartypes-home',
  templateUrl: './cartypes-home.component.html',
  styleUrls: ['./cartypes-home.component.scss'],
})
export class CartypesHomeComponent implements OnInit {
  cartypes$: Observable<Icartype[]>;
  constructor(private cartypeService: CartypeService) {
    this.cartypes$ = cartypeService.getCartypes$();
  }
  ngOnInit(): void {}
}
