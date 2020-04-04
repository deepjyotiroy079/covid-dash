import { Component, OnInit } from '@angular/core';
import { CoronaStatsHistoryService } from '../services/corona-stats-history.service';
import { Color, Label } from 'ng2-charts';
import { ChartDataSets, ChartOptions } from 'chart.js';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {

  constructor(private coronaStatsHistoryService: CoronaStatsHistoryService) { }

  lineChartData: ChartDataSets[] = [
    { data: [],  label: 'Total Confirmed Cases'  },
  ];

  lineChartLabels: Label[] = [];


  lineChartOptions: ChartOptions = {
    responsive: true
  };

  lineChartColors: Color[] = [
    {
      borderColor: 'rgba(9, 132, 227,1.0)',
      backgroundColor: 'rgba(116, 185, 255,1.0)',
    },
  ];

  lineChartLegend = true;
  lineChartPlugins = [];
  lineChartType = 'line';

  ngOnInit(): void {
    this.coronaStatsHistoryService.getHistory().subscribe(
      info => {
        console.log(info.data);
        const max = 12; // maximum value of x-axis values
        if(info.data.length > max) {
          info.data.splice(0, info.data.length - max);
        }
        info.data.forEach(element => {
          console.log(element.day);
          this.lineChartLabels.push(element.day.toString());
          this.lineChartData[0].data.push(element.summary.total);
        });
      }, err => console.log(err)
    );
  }



}
