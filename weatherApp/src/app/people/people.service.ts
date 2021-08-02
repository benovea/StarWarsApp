import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, of } from "rxjs";
import { catchError, map, pluck, switchMap } from "rxjs/operators";
import { PeopleData } from "./PeopleData";

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  people: PeopleData[] = [];
  allPeople: Observable<PeopleData[]> = this.getPeople();
  constructor(private http: HttpClient) { }

  getPeople(): Observable<PeopleData[]> {
    return this.http.get<{ results: PeopleData[] }>('https://swapi.dev/api/people/')
      .pipe(
        pluck('results'),
      );
  }

  getAllPeople(url: string) {

    return this.http.get<PeopleService>(url).pipe(
      map((peopleData) => {
        return {
          ...peopleData,
        };
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }


  findPeopleByName(name: string) {
    return this.allPeople.pipe(
      switchMap((people: PeopleData[]) => {
        const filtered = people.filter((people) => {
          return (people.name).toLowerCase() === name.toLowerCase()
        });
        return of(filtered[0]);
      })
    );
  }

  findPeopleByUrl(url: string) {
    return this.allPeople.pipe(
      switchMap((people: PeopleData[]) => {
        const filtered = people.filter((people) => {
          return (people.url).toLowerCase() === url.toLowerCase()
        });
        return of(filtered[0]);
      }),
    )
  }



}
