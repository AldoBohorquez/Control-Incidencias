import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private _http = inject(HttpClient);
  constructor() { }

  loginUser(user: any): Observable<any> {
    return this._http.post<any>('http://localhost:3000/users/login', user);
  }
}