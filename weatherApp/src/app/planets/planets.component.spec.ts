import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  fakeAsync,
  TestBed,
  tick,
} from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { of } from 'rxjs';
import {
  mockPlanet,
  WeatherTestingModule,
} from '../_services/weather-testing.module';
import { PlanetsComponent } from './planets.component';

describe('PlanetsComponent', () => {
  let component: PlanetsComponent;
  let fixture: ComponentFixture<PlanetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ReactiveFormsModule, WeatherTestingModule],
      declarations: [PlanetsComponent],
      providers: [
        {
          provide: ComponentFixtureAutoDetect,
          useValue: true,
        },
      ],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show relevant data', fakeAsync(() => {
    component.planets = of(mockPlanet);

    tick();
    fixture.detectChanges();

    const name: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="name"]');

    const clim: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="clim"]');
    const terr: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="terr"]');
    const water: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="water"]');
    const day: HTMLHeadingElement =
      fixture.nativeElement.querySelector('[data-cy="day"]');

    expect(name.textContent).toContain(mockPlanet.name);
    expect(clim.textContent).toContain(mockPlanet.climate);
    expect(terr.textContent).toContain(mockPlanet.terrain);
    expect(water.textContent).toContain(mockPlanet.surface_water);
    expect(day.textContent).toContain(`${mockPlanet.rotation_period}`);
  }));
});
