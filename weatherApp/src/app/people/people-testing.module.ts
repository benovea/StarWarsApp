import { of } from 'rxjs';
import { CommonModule } from '@angular/common';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { NgModule } from '@angular/core';
import { RouterTestingModule } from '@angular/router/testing';
import { PeopleData } from './PeopleData';
import { PeopleService } from './people.service';

export const mockPeople: PeopleData = {
  url: 'http:',
  name: 'Luke Skywalker',
  hair_color: 'blond',
  eye_color: 'blue',
  birth_year: '19BBY',
  gender: 'male',
};

const mockPeopleService: Partial<PeopleService> = {
  getPeople: () => {
    return of([mockPeople]);
  },
  getAllPeople: (url: string) => {
    return of(mockPeople);
  },
  findPeopleByName: (name: string) => {
    return of(mockPeople);
  },
  findPeopleByUrl: (url: string) => {
    return of(mockPeople);
  },
};

@NgModule({
  imports: [CommonModule, HttpClientTestingModule, RouterTestingModule],
  providers: [
    {
      provide: PeopleService,
      useValue: mockPeopleService,
    },
  ],
})
export class PeopleTestingModule {}
