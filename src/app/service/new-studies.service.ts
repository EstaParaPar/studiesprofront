import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../environments/environment';

const AUTH_API = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class NewStudiesService {
  apiUrl: string = AUTH_API + '/studies';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }
  create(data): Observable<any> {
    console.log(data);
    return this.http.post(`${this.apiUrl}` , data);
  }
  update(id, data): Observable<any> {
        return this.http.patch(`${this.apiUrl}/${id}`, data);
  }
  
  getLastStudy(lastStudyId) {

    const url = this.apiUrl + '/' + lastStudyId;
    return this.http.get(`${url}`);
}
}
