import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StoryComponent } from './story/story.component';
import { TeamAndValuesComponent } from './team-and-values/team-and-values.component';
import { CommitmentsComponent } from './commitments/commitments.component';
import { ProductionSitesComponent } from './production-sites/production-sites.component';

const routes: Routes = [
  {
    path : "story" , component : StoryComponent
  }
  ,
  {
    path : "team_and_values" , component : TeamAndValuesComponent
  }
  ,
  {
    path : "commitments" , component : CommitmentsComponent
  }
  ,
  {
    path : "production_sites" , component : ProductionSitesComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PresentationRoutingModule { }
