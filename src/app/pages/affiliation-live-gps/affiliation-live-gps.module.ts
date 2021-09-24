import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AffiliationLiveGpsPageRoutingModule } from './affiliation-live-gps-routing.module';

import { ReactiveFormsModule } from '@angular/forms';
import { AffiliationLiveGpsPage } from './affiliation-live-gps.page';
import { ComponentsModule } from 'src/app/components/components.module';
import { MatButtonModule } from '@angular/material/button';
import {MatStepperModule} from '@angular/material/stepper';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    AffiliationLiveGpsPageRoutingModule,
    MatButtonModule,
    MatStepperModule,
    ComponentsModule,
    MatInputModule,
    MatFormFieldModule
  ],
  declarations: [AffiliationLiveGpsPage]
})
export class AffiliationLiveGpsPageModule {}
