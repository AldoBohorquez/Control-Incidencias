import { Component, inject } from '@angular/core';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-admin-create-user',
  standalone: true,
  imports: [NavbarComponent, ReactiveFormsModule],
  templateUrl: './admin-create-user.component.html',
  styleUrl: './admin-create-user.component.css'
})
export class AdminCreateUserComponent {
  fb = inject(FormBuilder);
  activeRoute = inject(ActivatedRoute)
  route = inject(Router);
  formUser !: FormGroup;
  apiS = inject(ApiService);


  constructor(){
    this.formUser = this.fb.group({

    })
  }
}
