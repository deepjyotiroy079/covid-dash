import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoronaStatsService } from './services/corona-stats.service';
import { HttpClientModule } from '@angular/common/http';
import { ListAllComponent } from './list-all/list-all.component';
import { HomeComponent } from './home/home.component';
import { WorldComponent } from './world/world.component';

@NgModule({
  declarations: [
    AppComponent,
    ListAllComponent,
    HomeComponent,
    WorldComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [CoronaStatsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
