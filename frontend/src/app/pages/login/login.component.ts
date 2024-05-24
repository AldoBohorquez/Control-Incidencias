import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth/AuthService.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, HttpClientModule, NavbarComponent,ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  authService = inject(AuthService);
  fb = inject(FormBuilder);
  activeRoute = inject(ActivatedRoute);
  route = inject(Router);
  formUser!: FormGroup;
  apiS = inject(ApiService);

  constructor() {
    this.formUser = this.fb.group({
      email: ['',[]],
      password: ['',[]],
    });
  }

  loginUser() {
    this.apiS.loginUser(this.formUser.value).subscribe({
      next: (data) => {
        this.authService.login(data); // Call AuthService login method
        this.formUser.reset();
        this.route.navigateByUrl('userPanel');
      },
      error: (err) => {
        console.error(err);
      }
    });
  }
  

  login(){
    const user:any = this.formUser.value as any;
    console.log(user);

    this.apiS.loginUser(user).subscribe((data:any)=>{
      console.log(data);
      
      this.route.navigate(['userPanel']);

    })
    
  }
}
