import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'affiliation',
    loadChildren: () => import('./pages/affiliation/affiliation.module').then( m => m.AffiliationPageModule)
  },
  {
    path: 'affiliation-live-gps',
    loadChildren: () => import('./pages/affiliation-live-gps/affiliation-live-gps.module').then( m => m.AffiliationLiveGpsPageModule)
  },
  {
    path: 'plantillas',
    loadChildren: () => import('./pages/plantillas/plantillas.module').then( m => m.PlantillasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
