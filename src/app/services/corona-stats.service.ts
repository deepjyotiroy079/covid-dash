import { Stats } from './../models/stats';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoronaStatsService {

  constructor(private http: HttpClient) { }

  getStats(): Observable<Stats> {
    return this.http.get<Stats>('https://api.rootnet.in/covid19-in/stats/latest');
  }
}
