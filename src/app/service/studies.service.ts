import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';
import { Observable } from 'rxjs';
const AUTH_API = environment.API_URL;

@Injectable({
  providedIn: 'root'
})
export class StudiesService {
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  getStudy(idStudy) {
    const apiUrl = AUTH_API + '/studies';
    const url = apiUrl + '/' + idStudy;
    return this.http.get(`${url}`);
}
  getStudiesTechnician(idTechnician) {
      const apiUrl = AUTH_API + '/studiesTech';
      const url = apiUrl + '/' + idTechnician;
      return this.http.get(`${url}`);
  }
  confirmStudy(idStudy): Observable<any> {
    const apiUrl = AUTH_API + '/confirmStudy';
    const url = apiUrl + '/' + idStudy;
    return this.http.patch(`${url}`,null);
  }

  deleteStudy(idStudy): Observable<any> {
    const apiUrl = AUTH_API + '/deleteStudy';
    const url = apiUrl + '/' + idStudy;
    return this.http.patch(`${url}`,null);
  }
}
