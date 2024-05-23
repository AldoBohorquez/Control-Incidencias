import { Component } from '@angular/core';
import { NavbarUserComponent } from '../../shared/navbar-user/navbar-user.component';

@Component({
  selector: 'app-user-panel',
  standalone: true,
  imports: [NavbarUserComponent],
  templateUrl: './user-panel.component.html',
  styleUrl: './user-panel.component.css'
})
export class UserPanelComponent {

}
