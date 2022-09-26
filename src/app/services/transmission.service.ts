import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Itransmission } from '../shared/interfaces/models/itransmission';

@Injectable({
  providedIn: 'root',
})
export class TransmissionService {
  constructor(private http: HttpClient) {}

  getTransmissions$(): Observable<Itransmission[]> {
    return this.http.get<Itransmission[]>(environment.api + '/transmission');
  }
}
