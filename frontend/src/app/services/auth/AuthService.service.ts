import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private currentUser: any;

  private urlApi: string = "http://localhost:3000/";

  constructor(private http: HttpClient, private router: Router) { }

  login(user: any,role:number): Observable<any> {
    console.log(role);
    
    console.log(user);
  
    // Check if user object has a "role" property and its value is 1 (admin)
    if (role === 1) {
      return this.http.post<any>(this.urlApi + 'admin/login', user, { headers: { 'Access-Control-Allow-Origin': '*' } });
    } else {
      return this.http.post<any>(this.urlApi + 'user/login', user, { headers: { 'Access-Control-Allow-Origin': '*' } });
    }
  }

  logout() {
    this.currentUser = null;
    this.router.navigate(['/login']);
  }

  isLoggedIn(): boolean {
    return !!this.currentUser;
  }
}
