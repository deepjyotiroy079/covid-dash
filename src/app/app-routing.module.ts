import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ListAllComponent } from './list-all/list-all.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  { path: '', component: ListAllComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
