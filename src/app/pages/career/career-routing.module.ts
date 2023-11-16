import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ActivitiesComponent } from './activities/activities.component';
import { JoinUsComponent } from './join-us/join-us.component';

const routes: Routes = [
  {
    path : "activites" , component : ActivitiesComponent
  }
  ,
  {
    path : "join-us" , component : JoinUsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CareerRoutingModule { }
