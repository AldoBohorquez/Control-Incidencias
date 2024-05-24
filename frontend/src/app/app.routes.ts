import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UserPanelComponent } from './pages/user-panel/user-panel.component';
import { UserAssignedComponent } from './pages/user-assigned/user-assigned.component';
import { UserProgressComponent } from './pages/user-progress/user-progress.component';
import { UserFinishedComponent } from './pages/user-finished/user-finished.component';
import { AdminListComponent } from './pages/admin-list/admin-list.component';
import { AdminListUserComponent } from './pages/admin-list-user/admin-list-user.component';
import { UserCreateTareaComponent } from './pages/user-create-tarea/user-create-tarea.component';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'userPanel',
    component: UserPanelComponent,
  },
  {
    path: 'userAssigned/:id',
    component: UserAssignedComponent,
  },
  {
    path: 'userProgress/:id',
    component: UserProgressComponent,
  },
  {
    path: 'userFinished/:id',
    component: UserFinishedComponent,
  },
  {
    path: 'adminList',
    component: AdminListComponent,
  },
  {
    path: 'adminListUser',
    component: AdminListUserComponent,
  },
  {
    path: 'userCreateTarea',
    component: UserCreateTareaComponent,
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
