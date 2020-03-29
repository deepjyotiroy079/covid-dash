import { Component, OnInit } from '@angular/core';
import { CoronaStatsHistoryService } from '../services/corona-stats-history.service';
import { ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: 'app-discharged-trend',
  templateUrl: './discharged-trend.component.html',
  styleUrls: ['./discharged-trend.component.css']
})
export class DischargedTrendComponent implements OnInit {

  constructor(private coronaStatsHistoryService: CoronaStatsHistoryService) { }

  lineChartData: ChartDataSets[] = [
    { data: [],  label: 'Total Discharged' },
  ];

  lineChartLabels: Label[] = [];


  lineChartOptions = {
    responsive: true,
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(253, 203, 110,1.0)',
      backgroundColor: 'rgba(255, 234, 167,1.0)',
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
          this.lineChartData[0].data.push(element.summary.discharged);
        });
      }, err => console.log(err)
    );
  }
}
