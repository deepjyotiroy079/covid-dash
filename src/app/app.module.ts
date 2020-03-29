import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ChartsModule } from 'ng2-charts';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaStatsService } from './services/corona-stats.service';
import { HttpClientModule } from '@angular/common/http';
import { ListAllComponent } from './list-all/list-all.component';
import { HomeComponent } from './home/home.component';
import { ChartComponent } from './chart/chart.component';
import { HistoryComponent } from './history/history.component';
import { DeathsTrendComponent } from './deaths-trend/deaths-trend.component';
import { DischargedTrendComponent } from './discharged-trend/discharged-trend.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    HomeComponent,
    ChartComponent,
    HistoryComponent,
    DeathsTrendComponent,
    DischargedTrendComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ChartsModule,
    FontAwesomeModule
  ],
  providers: [CoronaStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
