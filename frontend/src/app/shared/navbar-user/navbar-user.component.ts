import { Component, effect, inject } from '@angular/core';
import { RouterLink, RouterModule } from '@angular/router';
import { StatusService } from '../../services/status.service';
import { Status } from '../../interfaces/status.interface';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {

  private statusServer = inject(StatusService)

  status = Array<Status>();

  constructor() {
    effect(()=>
      {
        this.status = this.statusServer.status();
      })
  }


}
