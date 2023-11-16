import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent {

  logoImage: string = "../../../assets/img/logoipsum-297.svg";
  defaultImage:string  = "https://www.placecage.com/1000/1000";
  arImage: string = "../../../assets/icons/ar.png";
  enImage: string = "../../../assets/icons/en.png";
}
