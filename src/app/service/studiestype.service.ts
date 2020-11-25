import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';

const AUTH_API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class StudiestypeService {

  apiUrl: string = AUTH_API + '/studiesType';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  // Read
  getStudiesType() {
    return this.http.get(`${this.apiUrl}`);
  }
  //create
  create(data): Observable<any> {
    return this.http.post(`${this.apiUrl}` , data);
}

  getStudyType(idStudy) {

      const url = this.apiUrl + '/' + idStudy;
      return this.http.get(`${url}`);
  }
  update(id, data): Observable<any> {
        return this.http.patch(`${this.apiUrl}/${id}`, data);
  }
}
