import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { environment } from '@env/environment';

const AUTH_API = environment.API_URL;
@Injectable({
  providedIn: 'root'
})
export class GroupPricesService {

  apiUrl: string = AUTH_API + '/groupPrice';
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }


  // Read
  getGroupPrices() {
    return this.http.get(`${this.apiUrl}`);
  }
  getGroupPricesById(idGRP) {
    const apiUrlaux: string = AUTH_API + '/priceGroupPrice/' + idGRP;
    return this.http.get(`${apiUrlaux}`);
  }
  create(data): Observable<any> {
        return this.http.post(`${this.apiUrl}` , data);
  }
  update(id, data): Observable<any> {
      const apiUrlaux: string = AUTH_API + '/priceGroupPrice/' + id;
      return this.http.patch(`${apiUrlaux}`, data);
  }
}
