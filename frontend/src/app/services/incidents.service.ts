import { HttpClient } from '@angular/common/http';
import { Injectable, Signal, computed, effect, inject, signal } from '@angular/core';
import { Incidents } from '../interfaces/incidents.interface';
import { catchError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IncidentsService {

  private http = inject(HttpClient);

  private incidentSignal = signal<Array<Incidents>>([]);

  constructor() {
    effect(()=>
    {
      this.getIncidents();
    })
  }

  get incidents():Signal <Array<Incidents> | []>
  {
    return computed(()=>this.incidentSignal())
  }

  set incidents(value:Array<Incidents>)
  {
    this.incidentSignal.update((s:Array<Incidents> | [])=>value)
  }

  async getIncidents()
  {

    this.http.get<Array<Incidents>>('http://localhost:3000/incidents',{ headers: { 'Access-Control-Allow-Origin': '*' } }).pipe(
      catchError((error)=>{
        console.log(error);
        return [];
      }
    )).subscribe(
    {
      next:(response)=>
        {
          this.incidents = response;
        }
    })
  }


}
