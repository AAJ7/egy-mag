import { Component } from '@angular/core';

@Component({
  selector: 'app-main-products',
  templateUrl: './main-products.component.html',
  styleUrls: ['./main-products.component.scss']
})
export class MainProductsComponent {
  defaultImage:string  = "https://www.placecage.com/1000/1000";
  cardImage1: string = "../../../../assets/img/grocery-1232944.jpg";
  cardImage2: string = "../../../../assets/img/grocery-1232944.jpg";
  cardImage3: string = "../../../../assets/img/grocery-1232944.jpg";
}
