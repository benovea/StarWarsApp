// tslint:disable: typedef
import { Observable } from 'rxjs';
import { of } from 'rxjs/internal/observable/of';
import { map, pluck, switchMap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { PlanetData } from '../planets/PlanetData';

@Injectable({
  providedIn: 'root',
})
export class WeatherService {
  planets: PlanetData[] = [];
  allPlanets: Observable<PlanetData[]> = this.getPlanets();

  constructor(private http: HttpClient) {}

  getPlanets(): Observable<PlanetData[]> {
    return this.http
      .get<{ results: PlanetData[] }>('https://swapi.dev/api/planets/')
      .pipe(pluck('results'));
  }

  getWeatherForPlanet(url: string) {
    return this.http.get<PlanetData>(url).pipe(
      map((planetData) => {
        const response: PlanetData = {
          ...planetData,
          surface_water: this.translateNrToString(planetData.surface_water),
        };
        return response;
      })
    );
  }

  translateNrToString(water: string) {
    if (water === '0') {
      return 'no';
    }
    if (water === 'unknown') {
      return 'unknown';
    } else {
      return 'yes';
    }
  }

  findPlanetByName(name: string) {
    return this.allPlanets.pipe(
      switchMap((planets: PlanetData[]) => {
        const filtered = planets.filter((planet) => {
          return planet.name.toLowerCase() === name.toLowerCase();
        });
        return of(filtered[0]);
      })
    );
  }

  findPlanetByUrl(url: string) {
    return this.allPlanets.pipe(
      switchMap((planets: PlanetData[]) => {
        const filtered = planets.filter((planet) => {
          return planet.url.toLowerCase() === url.toLowerCase();
        });
        return of(filtered[0]);
      })
    );
  }
}
