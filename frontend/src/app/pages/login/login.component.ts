import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, HttpClientModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  isNew = true;
  id = 0;
  fb = inject(FormBuilder);
  activeRoute = inject(ActivatedRoute)
  route = inject(Router);
  formProducto !: FormGroup;

  constructor(){
    this.formProducto = this.fb.group({
      title:       ['',[Validators.required, Validators.minLength(5)]],
      description: ['',[Validators.required, Validators.minLength(10)]],
      price:       [, [Validators.required, Validators.min(1)]],
      stock:       [,[Validators.required, Validators.min(1)]],
      category:    [""],
      img:         ['',Validators.required],
    });
  }
}