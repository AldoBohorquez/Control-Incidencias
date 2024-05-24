import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ApiService } from '../../services/api.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, HttpClientModule, NavbarComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  fb = inject(FormBuilder);
  activeRoute = inject(ActivatedRoute);
  route = inject(Router);
  formUser!: FormGroup;
  apiS = inject(ApiService);

  constructor() {
    this.formUser = this.fb.group({
      email: ['',[Validators.required, Validators.minLength(1)]],
      password: ['',[Validators.required, Validators.minLength(1)]],
    });
  }

  loginUser() {
    console.log(this.formUser.value);
    this.apiS.loginUser(this.formUser.value).subscribe({
      next: (data) => {
        console.log(data);
        this.formUser.reset();
        this.route.navigateByUrl('userPanel');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
}
