import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AngularSvgIconModule } from 'angular-svg-icon';
import { RouterModule } from '@angular/router';
import { LazyLoadImageModule } from 'ng-lazyload-image';
// import { LazyLoadImageModule } from 'ngx-lazy-load-image';




@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularSvgIconModule.forRoot(),
    RouterModule,
    LazyLoadImageModule
  ],
  exports: [
    AngularSvgIconModule,
    RouterModule,
    LazyLoadImageModule
  ]
})
export class SharedModule { }
