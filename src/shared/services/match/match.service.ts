import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable, pluck } from 'rxjs';
import { Person } from '../../models/person.model';
import { Data } from '../../models/data.model';
import { randomIntFromInterval } from './match.helper';

const DATA_URL = '/assets/data.json';

@Injectable({ providedIn: 'root' })
export class MatchService {

  constructor(
    private http: HttpClient,
  ) {
  }

  public getNextPerson(): Observable<Person> {
    return this.http.get<Data>(DATA_URL).pipe(
      pluck('persons'),
      map((persons: Person[]) => persons[randomIntFromInterval(0, 3)]),
    );
  }

  public getMatch(personId: string, like: boolean): Observable<boolean> {
    return this.http.get<Data>(DATA_URL, {
      params: {
        personId,
        like,
      },
    }).pipe(
      map((data: Data) => like && data.matches[personId]),
    );
  }

}
