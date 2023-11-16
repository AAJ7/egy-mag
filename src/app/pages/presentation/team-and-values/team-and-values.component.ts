import { Component } from '@angular/core';

@Component({
  selector: 'app-team-and-values',
  templateUrl: './team-and-values.component.html',
  styleUrls: ['./team-and-values.component.scss']
})
export class TeamAndValuesComponent {

  defaultImage:string  = "https://www.placecage.com/1000/1000";
  cardImage1: string = "../../../../assets/img/construction-2578410.jpg";
  cardImage2: string = "../../../../assets/img/hands-1838658.jpg";
  cardImage3: string = "../../../../assets/img/analysis-2030265.jpg";
  cardImage4: string = "../../../../assets/img/microscope-275984.jpg";
  logoImage: string = "../../../../assets/img/logoipsum-297.svg";
  teamImage: string = "../../../../assets/img/shaking-hands-3096229.jpg";
}
