import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StatsHistory } from '../models/stats-history';

@Injectable({
  providedIn: 'root'
})
export class CoronaStatsHistoryService {

  constructor(private http: HttpClient) { }

  getHistory(): Observable<StatsHistory> {
    return this.http.get<StatsHistory>('https://api.rootnet.in/covid19-in/stats/history');
  }
}
