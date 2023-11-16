import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExperienceRoutingModule } from './experience-routing.module';
import { DisruptiveTechnologyComponent } from './disruptive-technology/disruptive-technology.component';
import { EnviromentalImpactComponent } from './enviromental-impact/enviromental-impact.component';
import { WorldClassRDComponent } from './world-class-r-d/world-class-r-d.component';
import { SharedModule } from 'src/app/shared/shared.module';




@NgModule({
  declarations: [
    DisruptiveTechnologyComponent,
    EnviromentalImpactComponent,
    WorldClassRDComponent
  ],
  imports: [
    CommonModule,
    ExperienceRoutingModule,
    SharedModule
  ],
  exports: [
    DisruptiveTechnologyComponent,
    EnviromentalImpactComponent,
    WorldClassRDComponent
  ]
})
export class ExperienceModule { }
