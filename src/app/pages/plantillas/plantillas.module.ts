import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { PlantillasPageRoutingModule } from './plantillas-routing.module';
import { PlantillasPage } from './plantillas.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PlantillasPageRoutingModule
  ],
  declarations: [PlantillasPage]
})
export class PlantillasPageModule {}
