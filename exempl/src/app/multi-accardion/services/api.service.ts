import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ExampleAccardion } from '../interfaces/livescores'

const URL_API = "./assets/json/";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {}

  getDataSourses (value: string): Observable<any> {
    const url = `${URL_API}${value}`;
    return this.http.get(url);
  }
}
