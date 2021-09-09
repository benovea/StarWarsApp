import { fakeAsync, TestBed, tick } from '@angular/core/testing';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleComponentClass } from './people.component';
import { PeopleModule } from './people.module';
import { Location } from '@angular/common';
import { PeopleRoutingModule, routes } from './people.routing.module';
import { HttpClientTestingModule } from '@angular/common/http/testing';

fdescribe('PeopleRoutingModule', () => {
  let component: PeopleRoutingModule;
  let router: Router;
  let location: Location;
  let fixture;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule.withRoutes(routes),
        PeopleModule,
        HttpClientTestingModule,
      ],
    });

    router = TestBed.inject(Router);
    location = TestBed.inject(Location);
    fixture = TestBed.createComponent(PeopleComponentClass);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('navigate to "" redirects you to /PeopleComponentClass', fakeAsync(() => {
    router.navigate(['']);
    tick();

    expect(location.path()).toBe('/');
  }));

  it('navigate to "R2-D2" redirects you to /R2-D2', fakeAsync(() => {
    router.navigate(['R2-D2']);
    tick();

    expect(location.path()).toBe('/R2-D2');
  }));


});
