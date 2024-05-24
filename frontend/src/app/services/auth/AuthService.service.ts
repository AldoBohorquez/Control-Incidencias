import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { ActivatedRouteSnapshot, Router, RouterStateSnapshot } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: any;
  private urlApi: string = "http://localhost:3000/";

  private router = inject(Router);

  token= false;

  constructor(private http: HttpClient) { }
  
  isAth(): boolean {
    const token = localStorage.getItem('access_token');
    // Additional logic to check for valid JWT (e.g., expiry)
    return !!token; // Check if token exists and is truthy
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    const authService = inject(AuthService);
    return authService.isAth();
  }

  login(user: any, role: boolean): Observable<any> {

    // Check if user object has a "role" property and its value is 1 (admin)
    if (role) {
      return this.http.post<any>(this.urlApi + 'admin/login', user, { headers: { 'Access-Control-Allow-Origin': '*' } });
    } else {
      return this.http.post<any>(this.urlApi + 'user/login', user, { headers: { 'Access--Control-Allow-Origin': '*' } });
    }
  }

}
