import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BASEURL } from 'src/app/enviroments/enviroment';
import { PersonModel } from 'src/app/model/Person';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient) { }

  getUserService(): Observable<PersonModel[]>{
    return this.http.get<PersonModel[]>(`${BASEURL.person}`)
  }
  
  getUserByIdService(id: number): Observable<PersonModel>{
    return this.http.get<PersonModel>(`${BASEURL.person}` + id)
  }
}
