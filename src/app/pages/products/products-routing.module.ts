import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainProductsComponent } from './main-products/main-products.component';
import { AdditiveProductsComponent } from './additive-products/additive-products.component';

const routes: Routes = [
  {
    path : "main-products" , component  : MainProductsComponent
  }
  ,
  {
    path : "addititve-products" , component : AdditiveProductsComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductsRoutingModule { }
