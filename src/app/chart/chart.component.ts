import { Stats } from './../models/stats';
import { Component, OnInit } from '@angular/core';
import { CoronaStatsService } from '../services/corona-stats.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Label, SingleDataSet } from 'ng2-charts';
import { ChartType, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  
  stats: Stats;
  constructor(private coronaStatsService: CoronaStatsService) {  }

  public pieChartOptions: ChartOptions = {
    responsive: true
  };
  
  public pieChartLabels: Label[] = [['Total Confirmed Cases'], ['Discharged'], 'Deaths'];
  public pieChartData: SingleDataSet = [];
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColor:any = [
    {
        backgroundColor: [
          'rgba(30, 169, 224, 0.8)',
          'rgba(255,165,0,0.9)',
          'rgba(139, 136, 136, 0.9)'
        ]
    }
]

  ngOnInit () {
      this.coronaStatsService.getStats().subscribe(
          data => {
              this.pieChartData.push(data.data.summary.total);
              this.pieChartData.push(data.data.summary.discharged);
              this.pieChartData.push(data.data.summary.deaths);
          },
          (err: HttpErrorResponse) => {
              console.log (err.message);
          }
      );
  }
}
