import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '@env/environment';

const AUTH_API = environment.API_URL;

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  login(credentials): Observable<any> {
    return this.http.post(AUTH_API + '/auth/login', {
      username: credentials.username,
      password: credentials.password
    }, httpOptions);
  }

  register(data): Observable<any> {
      console.log(data);
      return this.http.post(AUTH_API + '/users', data, httpOptions);
  }

  passwordChange(userData): Observable<any> {
    console.log(userData);
    return this.http.post(AUTH_API  + '/auth/change-password' ,userData, httpOptions);
  }
}

