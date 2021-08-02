import { HttpErrorResponse } from '@angular/common/http';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { mockPlanet } from '../_services/weather-testing.module';
import { mockPeople } from './people-testing.module';
import { PeopleService } from './people.service';

describe('PeopleService', () => {
  let service: PeopleService;
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(PeopleService);
    httpTestingController = TestBed.inject(HttpTestingController);
  });


  it('should be created', () => {
    expect(service).toBeTruthy();
  });


  it('should get weather for a planet from api', () => {

    const mockUrl = 'http://foo';

    service.getAllPeople(mockUrl).subscribe((response) => {
      expect(response).toEqual({
        ...mockPeople // te kropki?
      });
      expect(response).not.toBeInstanceOf(HttpErrorResponse);
    })

    const request = httpTestingController.expectOne(mockUrl);
    request.flush(mockPeople);

  });



  it('should find people by name', () => {

    const mockUrl = 'https://swapi.dev/api/people/';

    service.findPeopleByName(mockPeople.name).subscribe((response) => {
      expect(response).toEqual(
        mockPeople
      );
    })
    const request = httpTestingController.expectOne(mockUrl);
    request.flush({ results: [mockPeople] });
  });




  it('should find people by url', () => {

    const mockUrl = 'https://swapi.dev/api/people/';

    service.findPeopleByUrl(mockPeople.url).subscribe((response) => {
      expect(response).toEqual(
        mockPeople
      );
    })
    const request = httpTestingController.expectOne(mockUrl);
    request.flush({ results: [mockPeople] });
  });


  afterEach(() => {
    httpTestingController.verify();
  });


});
