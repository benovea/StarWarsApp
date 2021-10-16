import { HttpErrorResponse } from '@angular/common/http';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { flush, TestBed } from '@angular/core/testing';
import { mockPlanet } from './weather-testing.module';
import { WeatherService } from './weather.service';

describe('WeatherService', () => {
  let service: WeatherService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
    });
    service = TestBed.inject(WeatherService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should translate 1 to yes, 0 to no', () => {
    expect(service.translateNrToString('1')).toEqual('yes');
    expect(service.translateNrToString('0')).toEqual('no');
  });

  it('should get weather for a planet from api', () => {
    const mockUrl = 'http://foo';

    service.getWeatherForPlanet(mockUrl).subscribe((response) => {
      expect(response).toEqual({
        ...mockPlanet,
        surface_water: 'yes',
      });
      expect(response).not.toBeInstanceOf(HttpErrorResponse);
    });

    const request = httpTestingController.expectOne(mockUrl);
    request.flush(mockPlanet);
  });

  for (let index = 0; index < 100; index++) {
    it('should find planet by name', () => {
      const mockUrl = 'https://swapi.dev/api/planets/';

      service.findPlanetByName(mockPlanet.name).subscribe((response) => {
        expect(response).toEqual(mockPlanet);
      });
      const request = httpTestingController.expectOne(mockUrl);
      request.flush({ results: [mockPlanet] });
    });
  }

  it('should find planet by url', () => {
    const mockUrl = 'https://swapi.dev/api/planets/';

    service.findPlanetByUrl(mockPlanet.url).subscribe((response) => {
      expect(response).toEqual(mockPlanet);
    });
    const request = httpTestingController.expectOne(mockUrl);
    request.flush({ results: [mockPlanet] });
  });

  afterEach(() => {
    httpTestingController.verify();
  });
});
