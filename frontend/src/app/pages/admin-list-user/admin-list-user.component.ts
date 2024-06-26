import { Component, inject } from '@angular/core';
import { ApiService } from '../../services/api.service';
import { AuthService } from '../../services/auth/AuthService.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin-list-user',
  standalone: true,
  imports: [],
  templateUrl: './admin-list-user.component.html',
  styleUrl: './admin-list-user.component.css'
})
export class AdminListUserComponent {
  misUsuarios : any[]=[];
  authService = inject(AuthService);
  apiS = inject(ApiService);
  router = inject(Router);
  
  constructor(){
    this.obtenerUsuarios();
  }
  obtenerUsuarios(){
    this.apiS.listUsers().subscribe(users =>{
      this.misUsuarios=users;
    })
  }
  verUsuario(usuario:any){
    this.router.navigateByUrl('/admin')
  }



}
