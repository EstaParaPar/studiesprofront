import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

const AUTH_API = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class HealthInsuranceService {

  apiUrl: string = AUTH_API + '/healthInsurance';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  // Read
  getHealthInsurance () {
    return this.http.get(`${this.apiUrl}`);
  }

  create(data): Observable<any> {
        return this.http.post(`${this.apiUrl}` , data);
  }

  getHealthinsById(id) {
    const apiUrlaux: string = AUTH_API + '/healthInsurance/' + id;
    return this.http.get(`${apiUrlaux}`);
  }

  update(id, data): Observable<any> {
    const apiUrlaux: string = AUTH_API + '/healthInsurance/' + id;
    return this.http.patch(`${apiUrlaux}`, data);
}
}