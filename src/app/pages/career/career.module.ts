import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CareerRoutingModule } from './career-routing.module';
import { ActivitiesComponent } from './activities/activities.component';
import { JoinUsComponent } from './join-us/join-us.component';
import { SharedModule } from 'src/app/shared/shared.module';


@NgModule({
  declarations: [
    ActivitiesComponent,
    JoinUsComponent
  ],
  imports: [
    CommonModule,
    CareerRoutingModule,
    SharedModule
  ]
})
export class CareerModule { }
