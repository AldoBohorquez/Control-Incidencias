import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { UserAssignedComponent } from './pages/user-assigned/user-assigned.component';
import { UserProgressComponent } from './pages/user-progress/user-progress.component';
import { UserCreateComponent } from './pages/user-create/user-create.component';
import { UserFinishedComponent } from './pages/user-finished/user-finished.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { AdminListUserComponent } from './pages/admin-list-user/admin-list-user.component';

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
        path:"userProgress/:id",
        component:UserProgressComponent
    },
    {
        path:"userFinished/:id",
        component:UserFinishedComponent
    },
    {
        path:"adminList",
        component:AdminListComponent
    },
    {
        path:"adminListUser",
        component:AdminListUserComponent
    },
    {
        path : '**',
        pathMatch : 'full',
        redirectTo : 'home'
    },
];
