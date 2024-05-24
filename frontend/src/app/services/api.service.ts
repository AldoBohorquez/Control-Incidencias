import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  private urlApi: string = "http://localhost:3000/";

  constructor(private http: HttpClient) { }

  loginUser(user: any): Observable<any> {
    console.log(user);
    if(user?.role===1){
      return this.http.post<any>(this.urlApi + 'admin/login', user, { headers: { 'Access-Control-Allow-Origin': '*' } });
    }else{
      return this.http.post<any>(this.urlApi + 'user/login', user, { headers: { 'Access-Control-Allow-Origin': '*' } });
    }
    
  }

  listUsers(){
    return this.http.get<any>(this.urlApi+'users',{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }

  addUser(user:any){
    return this.http.post<any>(this.urlApi+'users',{ headers: { 'Access-Control-Allow-Origin': '*' } });
  }
}
