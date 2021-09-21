import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { PlanetRoutingModule } from './planets.routing.module';
import { PlanetsComponent } from './planets.component';

@NgModule({
  declarations: [
    PlanetsComponent
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    PlanetRoutingModule
  ],
  exports: [PlanetsComponent]

})

export class PlanetsModule {}
