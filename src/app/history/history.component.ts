import { Component, OnInit } from '@angular/core';
import { CoronaStatsHistoryService } from '../services/corona-stats-history.service';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets } from 'chart.js';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private coronaStatsHistoryService: CoronaStatsHistoryService) { }

  lineChartData: ChartDataSets[] = [
    { data: [85, 72, 78, 75, 77, 75], label: 'Crude oil prices' },
  ];

  lineChartLabels: Label[] = ['January', 'February', 'March', 'April', 'May', 'June'];


  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: 'rgba(255,255,0,0.28)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
    this.coronaStatsHistoryService.getHistory().subscribe(
      data => {
        console.log(data);
      }, err => console.log(err)
    );
  }



}
