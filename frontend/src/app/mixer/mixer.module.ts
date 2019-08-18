import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixerRoutingModule } from './mixer-routing.module';
import { MainComponent } from './main/main.component';


@NgModule({
  declarations: [MainComponent],
  imports: [
    CommonModule,
    MixerRoutingModule
  ]
})
export class MixerModule { }
