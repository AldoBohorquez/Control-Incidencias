import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { UserAssignedComponent } from './pages/user-assigned/user-assigned.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';

export const routes: Routes = [
    {
        path:"",
        component:HomeComponent
    },
    {
        path:"login",
        component:LoginComponent
    },
    {
        path:"userCreate",
        component:UserCreateComponent
    },
    {
        path:"userPanel",
        component:UserPanelComponent
    },
    {
        path:"userAssigned/:id",
        component:UserAssignedComponent
    },
    {
    path : '**',
    pathMatch : 'full',
    redirectTo : 'home'
    }

];
