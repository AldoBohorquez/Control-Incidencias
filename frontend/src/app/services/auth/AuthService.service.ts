import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: any;
  private urlApi: string = "http://localhost:3000/";

  private router = inject(Router);

  token = "ffsdfs"

  constructor(private http: HttpClient) { }

  login(user: any, role: boolean): Observable<any> {

    // Check if user object has a "role" property and its value is 1 (admin)
    if (role) {
      return this.http.post<any>(this.urlApi + 'admin/login', user, { headers: { 'Access-Control-Allow-Origin': '*' } });
    } else {
      return this.http.post<any>(this.urlApi + 'user/login', user, { headers: { 'Access--Control-Allow-Origin': '*' } });
    }
  }

  isAuth()
  {
    return this.token.length > 0;
  }
}
