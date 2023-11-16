import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {

  logoImage: string = "../../../assets/img/logoipsum-297.svg";
  facebookIcon: string = "../../../assets/icons/icons8-facebook-50.png";
  instgramIcon: string = "../../../assets/icons/icons8-instagram-50.png";
  linkedinIcon: string = "../../../assets/icons/icons8-linkedin-50.png";
  defaultImage:string  = "https://www.placecage.com/1000/1000";
}
