import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PresentationRoutingModule } from './presentation-routing.module';
import { StoryComponent } from './story/story.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CommitmentsComponent } from './commitments/commitments.component';
import { ProductionSitesComponent } from './production-sites/production-sites.component';
import { TeamAndValuesComponent } from './team-and-values/team-and-values.component';


@NgModule({
  declarations: [
    StoryComponent,
    CommitmentsComponent,
    ProductionSitesComponent,
    TeamAndValuesComponent
  ],
  imports: [
    CommonModule,
    PresentationRoutingModule,
    SharedModule
  ]
})
export class PresentationModule { }
