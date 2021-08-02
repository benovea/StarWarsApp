import { Component } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { WeatherService } from '../_services/weather.service';
import { PlanetData } from './PlanetData';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { shareReplay } from 'rxjs/operators';


@Component({
  selector: 'app-planets',
  templateUrl: './planets.component.html',
  styleUrls: ['./planets.component.scss']
})


export class PlanetsComponent {


  planets: Observable<PlanetData>;
  allPlanets: Observable<PlanetData[]> = this.weatherService.getPlanets().pipe(
    shareReplay());

  nameFromUrl = this.route.snapshot.paramMap.get('name');
  form = this.fb.group({
    planetsSelection: [null, Validators.required]
  });


  constructor(
    private weatherService: WeatherService,
    private fb: FormBuilder,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    if (this.nameFromUrl) {
      this.weatherService.findPlanetByName(this.nameFromUrl).subscribe((planet) => {
        console.log(planet);
        this.form.patchValue({
          planetsSelection: planet.url
        });

        this.router.navigate(['planets', planet.name]);
        // this.handleEvent(planet.url);
      });
    }
  }


  // handleEvent(url: string) {
  //   //console.log(url);
  //   this.weatherService.findPlanetByUrl(url).subscribe((planet) => {
  //     this.router.navigate(['planets', planet.name]);
  //     this.planets = this.weatherService.getWeatherForPlanet(planet.url);
  //   });
  // }


  valueChanges = this.form.get('planetsSelection').valueChanges.subscribe(changes => {
    //console.log(changes);
    this.weatherService.findPlanetByUrl(changes).subscribe((planet) => {
      this.planets = this.weatherService.getWeatherForPlanet(planet.url);
      this.router.navigate(['planets', planet.name]);
    });
    this.planets = this.weatherService.getWeatherForPlanet(changes);
  });




}
