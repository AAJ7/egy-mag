import { Component } from '@angular/core';

@Component({
  selector: 'app-production-sites',
  templateUrl: './production-sites.component.html',
  styleUrls: ['./production-sites.component.scss']
})
export class ProductionSitesComponent {

  defaultImage:string  = "https://www.placecage.com/1000/1000";
  worldMapImage: string = "../../../../assets/img/map-of-the-world-2401458.jpg";
}
