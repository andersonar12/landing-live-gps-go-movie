import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AffiliationLiveGpsPage } from './affiliation-live-gps.page';

const routes: Routes = [
  {
    path: '',
    component: AffiliationLiveGpsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AffiliationLiveGpsPageRoutingModule {}
