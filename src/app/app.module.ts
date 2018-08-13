import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HerodetailsComponent } from './herodetails/herodetails.component';

const approute: Routes = [
  {path:  'dashboard', component: DashboardComponent},
  {path: 'heroes', component: HeroesComponent},
  {path: 'hero/:id', component: HerodetailsComponent}];


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HerodetailsComponent
      ],
  imports: [
    BrowserModule,
 RouterModule.forRoot(approute)
 ],
 exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
export const RoutingComponents = [DashboardComponent, HeroesComponent, HerodetailsComponent];

