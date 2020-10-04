import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';

const AUTH_API = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class PatientsService {

  apiUrl: string = AUTH_API + '/patients';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  // Read
  getHealthInsurance () {
    return this.http.get(`${this.apiUrl}`);
  }

  create(data): Observable<any> {
        return this.http.post(`${this.apiUrl}` , data);
  }
}