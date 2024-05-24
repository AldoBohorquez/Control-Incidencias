import { Component, effect, inject } from '@angular/core';
import { NavbarUserComponent } from '../../shared/navbar-user/navbar-user.component';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { AreasService } from '../../services/areas.service';
import { Areas } from '../../interfaces/areas.interface';
import { StatusService } from '../../services/status.service';
import { Status } from '../../interfaces/status.interface';
import { UsersService } from '../../services/users.service';
import { users } from '../../interfaces/users.interfaces';

@Component({
  selector: 'app-admin-list',
  standalone: true,
  imports: [NavbarComponent],
  templateUrl: './admin-list.component.html',
  styleUrl: './admin-list.component.css'
})
export class AdminListComponent {

  private serviceAreas = inject(AreasService);

  private serviceStatus = inject(StatusService);

  private serviceUsers = inject(UsersService);

  areas = Array<Areas>();

  status = Array<Status>();

  users = Array<users>();


  constructor() {
    effect(() => {
      this.areas = this.serviceAreas.areas();
      this.status = this.serviceStatus.status();
    })
  }

  getUsers() {
    
    const area = (<HTMLSelectElement>document.getElementById('2')).value;
    console.log(area);
    
    this.serviceUsers.getUsers(area);
    this.users = this.serviceUsers.users();
    console.log(this.users);
  }

}
