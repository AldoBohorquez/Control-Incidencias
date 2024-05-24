import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, effect, inject, signal } from '@angular/core';
import { Status } from '../interfaces/status.interface';

@Injectable({
  providedIn: 'root'
})
export class StatusService {

  private http = inject(HttpClient);

  private statusSignal = signal<Array<Status>>([]);

  constructor() {
    effect(() =>
      {
        this.getStatus();
      })
  }

  get status(): Signal<Array<Status> | []>
  {
    return this.statusSignal;
  }

  set status(value: Array<Status>)
  {
    this.statusSignal.update((s: Array<Status> | []) => value);
  }

  async getStatus()
  {
    this.http.get<Array<Status>>('http://localhost:3000/status', { headers: { 'Access-Control-Allow-Origin': '*' } }).subscribe({
      next: (response) =>
      {
        this.status = response;
      }
    });
  }

}
