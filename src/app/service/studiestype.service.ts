import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class StudiestypeService {

  apiUrl: string = 'http://192.168.200.10:3000/studiesType';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  // Read
  getStudiesType() {
    return this.http.get(`${this.apiUrl}`);
  }
}
