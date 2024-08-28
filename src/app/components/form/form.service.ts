/* eslint-disable padded-blocks */
// eslint-disable-next-line @typescript-eslint/consistent-type-imports
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { type Observable } from 'rxjs';
import { BASEURL } from 'src/app/enviroments/enviroment';
import { type Person } from 'src/app/model/Person';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor (private readonly http: HttpClient) { }

  isServerRunning (): Observable<boolean> {
    return this.http.get<boolean>(`${BASEURL.status}`);
  }

  getUserService (): Observable<Person[]> {
    return this.http.get<Person[]>(`${BASEURL.person}`);
  }

  getUserByIdService (id: number): Observable<Person> {
    return this.http.get<Person>(`${BASEURL.person}` + id);
  }

  postPerson (person: Person): Observable<Person> {
    return this.http.post<Person>(`${BASEURL.person}`, person);
  }

}
