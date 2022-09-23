import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, switchMap, forkJoin, of, map } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imodeldto } from '../shared/interfaces/dto/imodeldto';
import { Imaker } from '../shared/interfaces/models/imaker';
import { Imodel } from '../shared/interfaces/models/imodel';
import { MakerService } from './maker.service';

@Injectable({
  providedIn: 'root',
})
export class ModelService {
  constructor(private http: HttpClient, private makerService: MakerService) {}
  addModel$(model: Imodeldto) {
    return this.http.post<Imodeldto>(environment.api + '/models', model);
  }
  getModel$(id: number): Observable<Imodel> {
    return this.http.get<Imodeldto>(environment.api + '/models/' + id).pipe(
      switchMap((model: Imodeldto) => {
        return forkJoin({
          maker: this.makerService.getMaker$(model.maker),
          model: of(model),
        });
      }),
      map((fj: { maker: Imaker; model: Imodeldto }) => {
        let model: Imodel = {
          ...fj.model,
          maker: fj.maker,
        };
        return model;
      })
    );
  }
}
