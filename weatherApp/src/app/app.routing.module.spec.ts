import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import {
  RouterTestingModule,
  SpyNgModuleFactoryLoader,
} from '@angular/router/testing';
import { AppRoutingModule, routes } from './app.routing.module';
import { Location } from '@angular/common';

import { AppComponent } from './app.component';
import { PlanetsModule } from './planets/planets.module';
import { PeopleModule } from './people/people.module';

describe('AppRoutingModule', () => {
  let component: AppRoutingModule;
  let router: Router;
  let location: Location;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [RouterTestingModule.withRoutes(routes)],
      providers: [SpyNgModuleFactoryLoader],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(AppComponent);
    router.initialNavigation();

    const loader = TestBed.inject(SpyNgModuleFactoryLoader);
    loader.stubbedModules = [
      { lazyModule: PlanetsModule },
      { lazyModule: PeopleModule },
    ];
    router.resetConfig(routes);

    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('navigate to "" redirects you to /planets', fakeAsync(() => {
    router.navigate(['']);
    tick();

    expect(location.path()).toBe('/abc');
  }));

  it('navigate to "planets" redirects you to /planets', fakeAsync(() => {
    router.navigate(['planets']);
    tick();

    expect(location.path()).toBe('/planets');
  }));

  it('navigate to "people" redirects you to /people', fakeAsync(() => {
    router.navigate(['people']);
    tick();

    expect(location.path()).toBe('/people');
  }));
});
