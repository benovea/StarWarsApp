import {
  ComponentFixture,
  ComponentFixtureAutoDetect,
  TestBed,
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
    component.planets = of(mockPlanet);
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should show relevant data', () => {
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

    expect(name.innerText).toContain(mockPlanet.name);
    expect(clim.innerText).toContain(mockPlanet.climate);
    expect(terr.innerText).toContain(mockPlanet.terrain);
    expect(water.innerText).toContain(mockPlanet.surface_water);
    expect(day.innerText).toContain(`${mockPlanet.rotation_period}`);
  });
});
