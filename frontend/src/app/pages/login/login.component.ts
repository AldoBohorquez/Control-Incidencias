import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth/AuthService.service';
import { users } from '../../interfaces/users.interfaces';
import { usersLogin } from '../../interfaces/userLogin.interface';

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

  role: boolean = false;
  selectedRole: boolean = false;


  constructor() {
    this.formUser = this.fb.group({
      email: ['',[]],
      password: ['',[]],
    });
  }



  loginUser() {
    const user = this.formUser.value as usersLogin;

    console.log(user);
    
    this.authService.login(user, this.selectedRole) // Pass selectedRole
      .subscribe({
        next: (data:users) => {          
          console.log(data);
          
          this.formUser.reset();
          localStorage.setItem('token', "true");
          if(this.role)
            {
              this.route.navigate(['/adminList'], {
                queryParams: { id: JSON.stringify(data.id_admin)}
              });
            }
            else
            {
              this.route.navigate(['/userPanel'], {
                queryParams: { id: JSON.stringify(data.id_admin)}
              });
            }
        },
        error: (err) => {
          console.error(err);
        }
      });
    }

  onRoleChange(event: any) {
    const roleValue = event.target.value;
    this.selectedRole = roleValue;
    console.log('Selected role:', this.selectedRole);
    this.role = this.selectedRole;
    console.log(this.role);
    
  }
  
}

