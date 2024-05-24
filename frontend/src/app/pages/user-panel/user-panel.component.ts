import { Component, effect, inject } from '@angular/core';
import { NavbarUserComponent } from '../../shared/navbar-user/navbar-user.component';
import { IncidentsService } from '../../services/incidents.service';
import { Incidents } from '../../interfaces/incidents.interface';
import { RouterLink } from '@angular/router';
import { AlertsService } from '../../services/alert.service';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [NavbarUserComponent,RouterLink],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent {

  private serviceIncidents = inject(IncidentsService);
  alertsService = inject(AlertsService);
  incidents = Array<Incidents>();
  
  constructor() {
    effect(() => {
        this.incidents = this.serviceIncidents.incidents();
        console.log(this.incidents);
        setTimeout(() => {
        if (this.incidents.length === 0) {
          this.alertsService.alert('No existen incidencias', 'error');
        }
      }, 3000); 
    });
  }
}

