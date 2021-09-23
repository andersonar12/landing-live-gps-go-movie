import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatListModule } from '@angular/material/list';

import {MatMenuModule} from '@angular/material/menu';
import { TopToolbarComponent } from './top-toolbar/top-toolbar.component';
import { FooterComponent } from './footer/footer.component';
/*-------------------Components----------------- */
const components =[
  TopToolbarComponent,
  FooterComponent
]

@NgModule({
  declarations: components,
  imports: [
    CommonModule,
    IonicModule,
    MatButtonModule,
    MatIconModule,
    MatListModule,
    MatMenuModule
  ],
  exports: [components, MatButtonModule, MatIconModule, MatListModule],
  entryComponents:[]
})
export class ComponentsModule { }
