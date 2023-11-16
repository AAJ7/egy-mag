import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  bgImage: string = "../../../../assets/img/drought-1675729.jpg";
  defaultImage:string  = "https://www.placecage.com/1000/1000";
  cardImage1: string = "../../../../assets/img/pexels-eva-bronzini-5503193.jpg";
  cardImage2: string = "../../../../assets/img/pexels-viktoria-slowikowska-5678108.jpg";
  cardImage3: string = "../../../../assets/img/pexels-hana-mara-3650647.jpg";
  logoImage: string = "../../../../assets/img/logoipsum-297.svg";

  canplay(event:any) {
    event.target.play();
  }
  loadedmetadata(event:any) {
    event.target.muted = true;
  }
}
