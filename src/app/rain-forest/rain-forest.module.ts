import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RainForestRoutingModule } from './rain-forest-routing.module';
import { RainForestComponent } from './rain-forest.component';
import { RainForestAppleTreeService } from './RainForestAppleTreeService';


@NgModule({
  declarations: [RainForestComponent],
  imports: [
    CommonModule,
    RainForestRoutingModule
  ],
  providers: [
    RainForestAppleTreeService
  ]
})
export class RainForestModule { }
