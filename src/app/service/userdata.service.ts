import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';
import { AuthInterceptor } from '../helpers/auth.interceptor';


import { environment } from '@env/environment';

const AUTH_API = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  apiUrl: string = AUTH_API + '/users';
  apiUrlDoctor: string = AUTH_API + '/doctors';
  apiUrlTechs: string = AUTH_API + '/techs';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private TokenStorageService : TokenStorageService) { }

  token = this.TokenStorageService.getToken();


    // Read
    getUsersData() {
        return this.http.get(`${this.apiUrl}`);
    }
    getDoctors() {
        return this.http.get(`${this.apiUrlDoctor}`);

    }
    getTechs() {
      return this.http.get(`${this.apiUrlTechs}`);

  }
}
