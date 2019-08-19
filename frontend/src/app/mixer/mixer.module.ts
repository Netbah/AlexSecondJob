import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MixerRoutingModule } from './mixer-routing.module';
import { MainComponent } from './main/main.component';
import { IngredientComponent } from './ingredient/ingredient.component';
import { ScrollToModule } from '@nicky-lenaers/ngx-scroll-to';
import { PreviewComponent } from './preview/preview.component';
import { SummaryComponent } from './summary/summary.component';


@NgModule({
  declarations: [MainComponent, IngredientComponent, PreviewComponent, SummaryComponent],
  imports: [
    CommonModule,
    MixerRoutingModule,
    ScrollToModule.forRoot()
  ]
})
export class MixerModule { }
