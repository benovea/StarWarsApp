import { of } from 'rxjs';

import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';

import { PlanetData } from '../planets/PlanetData';
import { WeatherService } from './weather.service';

export const mockPlanet: PlanetData = {
  climate: 'cold',
  diameter: 1,
  name: 'Hoth',
  orbital_period: 1,
  population: 1,
  rotation_period: 1,
  surface_water: '1',
  terrain: 'stony',
  url: 'http:'
};

const mockWeatherService: Partial<WeatherService> = {
  getPlanets: () => {
    return of([mockPlanet]);
  },
  getWeatherForPlanet: (url: string) => {
    return of(mockPlanet);
  },
  findPlanetByName: (name: string) => {
    return of(mockPlanet);
  },
  findPlanetByUrl: (url: string) => {
    return of(mockPlanet);
  }

}

@NgModule({
  imports: [
    CommonModule,
    HttpClientTestingModule,
    RouterTestingModule
  ],
  providers: [
    {
      provide: WeatherService,
      useValue: mockWeatherService
    }
  ]
})
export class WeatherTestingModule {}
