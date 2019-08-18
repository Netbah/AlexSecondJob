import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixerRoutingModule } from './mixer-routing.module';
import { MainComponent } from './main/main.component';
import { IngredientComponent } from './ingredient/ingredient.component';


@NgModule({
  declarations: [MainComponent, IngredientComponent],
  imports: [
    CommonModule,
    MixerRoutingModule
  ]
})
export class MixerModule { }
