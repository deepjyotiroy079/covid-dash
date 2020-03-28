import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaStatsService } from './services/corona-stats.service';
import { HttpClientModule } from '@angular/common/http';
import { ListAllComponent } from './list-all/list-all.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';
import { ChartComponent } from './chart/chart.component';
import { HistoryComponent } from './history/history.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    HomeComponent,
    WorldComponent,
    ChartComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule
  ],
  providers: [CoronaStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
