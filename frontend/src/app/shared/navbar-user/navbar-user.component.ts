import { Component, effect, inject } from '@angular/core';
import { Router, RouterLink, RouterModule } from '@angular/router';
import { StatusService } from '../../services/status.service';
import { Status } from '../../interfaces/status.interface';
import { AuthService } from '../../services/auth/AuthService.service';

@Component({
  selector: 'app-navbar-user',
  standalone: true,
  imports: [RouterModule,RouterLink],
  templateUrl: './navbar-user.component.html',
  styleUrl: './navbar-user.component.css'
})
export class NavbarUserComponent {

  private statusServer = inject(StatusService)

  private authService = inject(AuthService);
  private router = inject(Router)

  status = Array<Status>();

  constructor() {
    effect(()=>
      {
        this.status = this.statusServer.status();
      })
  }


  logout() {
    console.log('Logout');
    this.authService.isAth(false);
    this.router.navigateByUrl('login');
  }
}
