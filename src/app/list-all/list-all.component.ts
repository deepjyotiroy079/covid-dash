import { Stats } from './../models/stats';
import { CoronaStatsService } from './../services/corona-stats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-all',
  templateUrl: './list-all.component.html',
  styleUrls: ['./list-all.component.css']
})
export class ListAllComponent implements OnInit {

  constructor(private coronaStatsService: CoronaStatsService) { }

  result: Stats;

  ngOnInit(): void {
    this.getStatistics();
  }

  getStatistics(): void {
    this.coronaStatsService.getStats().subscribe(data=>{this.result = data; console.log(data)}, err=>console.log(err));
  }
}
