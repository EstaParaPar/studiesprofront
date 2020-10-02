import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { TokenStorageService } from '../service/token-storage.service';
import { AuthInterceptor } from '../helpers/auth.interceptor';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {
  
  apiUrl: string = 'http://localhost:3000/users';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient, private TokenStorageService : TokenStorageService) { }

  token = this.TokenStorageService.getToken();


    // Read
    getUsersData() {
      return this.http.get(`${this.apiUrl}`);
    }
}