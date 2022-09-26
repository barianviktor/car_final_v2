import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Imotor } from '../shared/interfaces/models/imotor';

@Injectable({
  providedIn: 'root',
})
export class MotorService {
  constructor(private http: HttpClient) {}

  getMotors$(): Observable<Imotor[]> {
    return this.http.get<Imotor[]>(environment.api + '/motors');
  }
}
