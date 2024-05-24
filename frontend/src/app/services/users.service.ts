import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, effect, inject, signal } from '@angular/core';
import { users } from '../interfaces/users.interfaces';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  private htpp = inject(HttpClient);

  private usersSignal = signal<Array<users>>([]);

  constructor() {
    effect(() => {
      this.usersSignal()
    }); 
  }

  get users(): Signal<Array<users> | []> {
    return this.usersSignal;
  }

  set users(value: Array<users>) {
    this.usersSignal.update((s: Array<users> | []) => value);
  }

  async getUsers(area: string) {
    this.htpp.get<Array<users>>(`http://localhost:3000/users/area/${area}`, { headers: { 'Access-Control-Allow-Origin': '*' } }).subscribe({
      next: (response) => {
        this.users = response;
      }
    });
  }
}
