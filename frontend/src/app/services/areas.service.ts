import { Injectable, Signal, effect, inject, signal } from '@angular/core';
import { Areas } from '../interfaces/areas.interface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  private http = inject(HttpClient);

  private areasSignal = signal<Array<Areas>>([]);

  constructor() {
    effect(()=>
    {
      this.getAreas();
    })
   }

  get areas(): Signal<Array<Areas> | []> {
    return this.areasSignal;
  }

  set areas(value: Array<Areas>) {
    this.areasSignal.update((s: Array<Areas> | []) => value);
  }

  async getAreas() {
    this.http.get<Array<Areas>>('http://localhost:3000/area', { headers: { 'Access-Control-Allow-Origin': '*' } }).subscribe({
      next: (response) => {
        this.areas = response;
      }
    });
  }
}
