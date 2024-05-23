import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [RouterOutlet, CommonModule, RouterModule, FormsModule, HttpClientModule, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email:string ="cruzfabianhiram@gmail.com";
  pwd:string ="12345";
  onlogin(){
    if(this.loginObj.EmailId===this.email && this.loginObj.Password===this.pwd){
      alert(this.loginObj.EmailId+" "+ this.loginObj.Password);
    }
    else{
      alert("Revisa tus credenciales");
    }
  }

loginObj: Login;

  constructor( private http: HttpClient, private router: Router){
    this.loginObj= new Login();
  }/*
  onlogin(){
    this.http.post('https://freeapi.miniprojectideas.com/api/User/Login',this.loginObj).subscribe((res : any)=>{
      if(res.result){
        alert("Inicio de sesion correcta");
        this.router.navigateByUrl('/panelAdmin')
      }else{
        alert("res.message");
      }
    });
  }*/
}

export class Login
{
  EmailId: string;
  Password: string;
  constructor(){
    this.EmailId = '';
    this.Password = '';
  }
}