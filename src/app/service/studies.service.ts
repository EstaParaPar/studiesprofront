import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';
const AUTH_API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  apiUrl: string = AUTH_API + '/studies';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getStudy(idStudy) {

    const url = this.apiUrl + '/' + idStudy;
    return this.http.get(`${url}`);
}
}
