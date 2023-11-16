import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DisruptiveTechnologyComponent } from './disruptive-technology/disruptive-technology.component';
import { EnviromentalImpactComponent } from './enviromental-impact/enviromental-impact.component';
import { WorldClassRDComponent } from './world-class-r-d/world-class-r-d.component';

const routes: Routes = [
  {
    path : "disruptive-technology" , component : DisruptiveTechnologyComponent
  }
  ,
  {
    path : "enviromental-impact" , component : EnviromentalImpactComponent
  }
  ,
  {
    path : "world-class R&d" , component : WorldClassRDComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ExperienceRoutingModule { }
