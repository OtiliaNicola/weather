import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard.component';
import { SharedModule } from "../../shared/shared.module";
import { ResumenComponent } from './components/resumen/resumen.component';
import { DetailsComponent } from './components/details/details.component';
import { InfoComponent } from './components/info/info.component';
import { CardTemperatureDayComponent } from './components/card-temperature-day/card-temperature-day.component';
import { OtherCityComponent } from './components/other-city/other-city.component';


@NgModule({
  declarations: [
    DashboardComponent,
    ResumenComponent,
    DetailsComponent,
    InfoComponent,
    CardTemperatureDayComponent,
    OtherCityComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule
]
})
export class DashboardModule { }
