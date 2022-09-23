import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import { Icolor } from '../shared/interfaces/models/icolor';
@Injectable({
  providedIn: 'root',
})
export class ColorService {
  constructor(private http: HttpClient) {}

  addColor(color: Icolor) {
    return this.http.post(environment.api + '/colors', color).subscribe((x) => {
      console.log(x);
    });
  }
  getColors(): Observable<Icolor[]> {
    return this.http.get<Icolor[]>(environment.api + '/colors');
  }
  getColor$(id: number): Observable<Icolor> {
    return this.http.get<Icolor>(environment.api + '/colors/' + id);
  }
}
