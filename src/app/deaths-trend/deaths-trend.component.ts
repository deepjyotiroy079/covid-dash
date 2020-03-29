import { Component, OnInit } from '@angular/core';
import { CoronaStatsHistoryService } from '../services/corona-stats-history.service';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-deaths-trend',
  templateUrl: './deaths-trend.component.html',
  styleUrls: ['./deaths-trend.component.css']
})
export class DeathsTrendComponent implements OnInit {
  constructor(private coronaStatsHistoryService: CoronaStatsHistoryService) { }

  lineChartData: ChartDataSets[] = [
    { data: [],  label: 'Total Deaths'  },
  ];

  lineChartLabels: Label[] = [];


  lineChartOptions : ChartOptions= {
    responsive: true
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(214, 48, 49,1.0)',
      backgroundColor: 'rgba(255, 118, 117,1.0)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
    this.coronaStatsHistoryService.getHistory().subscribe(
      info => {
        console.log(info.data);
        info.data.forEach(element => {
          console.log(element.day);
          this.lineChartLabels.push(element.day.toString());
          this.lineChartData[0].data.push(element.summary.deaths);
        });
      }, err => console.log(err)
    );
  }

}
