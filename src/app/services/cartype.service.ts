import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {
  forkJoin,
  from,
  mergeMap,
  toArray,
  switchMap,
  Observable,
  of,
  map,
  debounceTime,
} from 'rxjs';
import { environment } from 'src/environments/environment';
import { Iarticledto } from '../shared/interfaces/dto/iarticledto';
import { Icartypedto } from '../shared/interfaces/dto/icartypedto';
import { Imodeldto } from '../shared/interfaces/dto/imodeldto';
import { Ismartcarddto } from '../shared/interfaces/dto/ismartcarddto';
import { Iarticle } from '../shared/interfaces/models/iarticle';
import { Icartype } from '../shared/interfaces/models/icartype';
import { ICartypeSearch } from '../shared/interfaces/models/icartype-search';
import { Idesign } from '../shared/interfaces/models/idesign';
import { Iimage } from '../shared/interfaces/models/iimage';
import { Imaker } from '../shared/interfaces/models/imaker';
import { Imodel } from '../shared/interfaces/models/imodel';
import { Ismartcard } from '../shared/interfaces/models/ismartcard';
import { ArticleService } from './article.service';
import { DesignService } from './design.service';
import { ImageService } from './image.service';
import { MakerService } from './maker.service';
import { ModelService } from './model.service';
import { SmartcardService } from './smartcard.service';

@Injectable({
  providedIn: 'root',
})
export class CartypeService {
  constructor(
    private http: HttpClient,
    private imageService: ImageService,
    private articleService: ArticleService,
    private smartcardService: SmartcardService,
    private modelService: ModelService,
    private designService: DesignService,
    private makerService: MakerService
  ) {}

  //getCartypes():Observable<Icartype[]>{}

  addCartype(
    images: Iimage[],
    articles: Iarticle[],
    smartcards: Ismartcard[],
    model: Imodeldto,
    design: number,
    seats: number,
    title: string,
    titleImage: Iimage,
    maker: number
  ) {
    forkJoin({
      articles: from(articles).pipe(
        debounceTime(200),
        mergeMap((article: Iarticle) => {
          return this.articleService.addArticle$(article);
        }),
        toArray()
      ),
      images: from(images).pipe(
        debounceTime(100),

        mergeMap((image: Iimage) => {
          return this.imageService.addImage$(image);
        }),
        toArray()
      ),
      smartcards: from(smartcards).pipe(
        debounceTime(300),

        mergeMap((smartcard: Ismartcard) => {
          return this.smartcardService.addSmartCard$(smartcard);
        }),
        toArray()
      ),
      model: this.modelService.addModel$(model),
      titleImage: this.imageService.addImage$(titleImage),
    })
      .pipe(
        switchMap(
          (fj: {
            articles: Iarticledto[];
            images: Iimage[];
            smartcards: Ismartcarddto[];
            model: Imodeldto;
            titleImage: Iimage;
          }) => {
            console.log(fj);

            let articleIds: number[] = [];
            let imagesIds: number[] = [];
            let smartcardsIds: number[] = [];
            fj.articles.forEach((article) => {
              articleIds.push(article.id!);
            });
            fj.images.forEach((image) => {
              imagesIds.push(image.id!);
            });
            fj.smartcards.forEach((smartcard) => {
              smartcardsIds.push(smartcard.id!);
            });
            let cartypedto: Icartypedto = {
              articles: articleIds,
              images: imagesIds,
              smartcards: smartcardsIds,
              model: fj.model.id!,
              design: design,
              seats: seats,
              title: title,
              titleImage: fj.titleImage.id!,
              maker: maker,
            };
            return this.http.post(environment.api + '/cartypes', cartypedto);
          }
        )
      )
      .subscribe((x) => console.log(x));
  }
  getCartypes$(): Observable<Icartype[]> {
    return this.http.get<Icartypedto[]>(environment.api + '/cartypes').pipe(
      switchMap((cartypes: Icartypedto[]) => {
        return from(cartypes);
      }),
      mergeMap((cartype: Icartypedto) => {
        return this.getDatasToCartype$(cartype);
      }),
      toArray()
    );
  }
  getDatasToCartype$(cartype: Icartypedto): Observable<Icartype> {
    return forkJoin({
      cartype: of(cartype),
      articles: from(cartype.articles).pipe(
        mergeMap((index: number) => {
          return this.articleService.getArticle$(index);
        }),
        toArray()
      ),
      smartcards: from(cartype.smartcards).pipe(
        mergeMap((index: number) => {
          return this.smartcardService.getSmartCard$(index);
        }),
        toArray()
      ),
      images: from(cartype.images).pipe(
        mergeMap((index: number) => {
          return this.imageService.getImage$(index);
        }),
        toArray()
      ),
      design: this.designService.getDesign$(cartype.design),
      titleImage: this.imageService.getImage$(cartype.titleImage),
      model: this.modelService.getModel$(cartype.model),
      maker: this.makerService.getMaker$(cartype.maker),
    }).pipe(
      map(
        (fj: {
          cartype: Icartypedto;
          articles: Iarticle[];
          smartcards: Ismartcard[];
          images: Iimage[];
          titleImage: Iimage;
          model: Imodel;
          design: Idesign;
          maker: Imaker;
        }) => {
          let cartype: Icartype = {
            id: fj.cartype.id!,
            articles: fj.articles,
            smartcards: fj.smartcards,
            seats: fj.cartype.seats,
            title: fj.cartype.title,
            titleImage: fj.titleImage,
            model: fj.model,
            design: fj.design,
            images: fj.images,
            maker: fj.maker,
          };
          return cartype;
        }
      )
    );
  }
  getDataToCardLink$(cartype: Icartypedto): Observable<Icartype> {
    return forkJoin({
      cartype: of(cartype),
      articles: from(cartype.articles).pipe(
        mergeMap((index: number) => {
          return this.articleService.getArticle$(index);
        }),
        toArray()
      ),
      smartcards: from(cartype.smartcards).pipe(
        mergeMap((index: number) => {
          return this.smartcardService.getSmartCard$(index);
        }),
        toArray()
      ),
      images: from(cartype.images).pipe(
        mergeMap((index: number) => {
          return this.imageService.getImage$(index);
        }),
        toArray()
      ),
      design: this.designService.getDesign$(cartype.design),
      titleImage: this.imageService.getImage$(cartype.titleImage),
      model: this.modelService.getModel$(cartype.model),
      maker: this.makerService.getMaker$(cartype.maker),
    }).pipe(
      map(
        (fj: {
          cartype: Icartypedto;
          articles: Iarticle[];
          smartcards: Ismartcard[];
          images: Iimage[];
          titleImage: Iimage;
          model: Imodel;
          design: Idesign;
          maker: Imaker;
        }) => {
          let cartype: Icartype = {
            id: fj.cartype.id!,
            articles: fj.articles,
            smartcards: fj.smartcards,
            seats: fj.cartype.seats,
            title: fj.cartype.title,
            titleImage: fj.titleImage,
            model: fj.model,
            design: fj.design,
            images: fj.images,
            maker: fj.maker,
          };
          return cartype;
        }
      )
    );
  }
  getCartype$(id: number): Observable<Icartype> {
    return this.http.get<Icartypedto>(environment.api + '/cartypes/' + id).pipe(
      switchMap((cartype: Icartypedto) => {
        return this.getDatasToCartype$(cartype);
      })
    );
  }
  getCartypeByParam$(param: ICartypeSearch): Observable<Icartype[]> {
    let p: any = {};
    if (param.design) {
      p.design = param.design;
    }
    if (param.maker) {
      p.maker = param.maker;
    }

    return this.http
      .get<Icartypedto[]>(environment.api + '/cartypes', { params: p })
      .pipe(
        switchMap((cartypes: Icartypedto[]) => {
          return from(cartypes);
        }),
        mergeMap((cartype: Icartypedto) => {
          return this.getDataToCardLink$(cartype);
        }),
        toArray()
      );
  }
  searchCartype$() {}
}
