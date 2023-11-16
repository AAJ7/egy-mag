import { Component } from '@angular/core';

@Component({
  selector: 'app-enviromental-impact',
  templateUrl: './enviromental-impact.component.html',
  styleUrls: ['./enviromental-impact.component.scss']
})
export class EnviromentalImpactComponent {

  defaultImage:string  = "https://www.placecage.com/1000/1000";
  factoryImage: string = "../../../../assets/img/refinery-3613526.jpg";
  soilImage: string = "../../../../assets/img/greenhouse-6226263.jpg";
  chemcialsImage: string = "../../../../assets/img/chemistry-3533039.jpg";
}
