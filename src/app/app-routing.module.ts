import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'experience',
    loadChildren: () =>
      import('./pages/experience/experience.module').then((m) => m.ExperienceModule),
  },
  {
    path: 'products',
    loadChildren: () =>
      import('./pages/products/products.module').then((m) => m.ProductsModule),
  },
  {
    path: 'presentation',
    loadChildren: () =>
      import('./pages/presentation/presentation.module').then((m) => m.PresentationModule),
  },
  {
    path: 'career',
    loadChildren: () =>
      import('./pages/career/career.module').then((m) => m.CareerModule),
  },
  {
    path: '**',
    loadChildren: () =>
      import('./pages/home/home.module').then((m) => m.HomeModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
