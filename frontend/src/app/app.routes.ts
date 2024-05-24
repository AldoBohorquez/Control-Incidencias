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
import { AdminCreateUserComponent } from './pages/admin-create-user/admin-create-user.component';
import { authGuard, authGuardMatch } from './services/guard/auth.guard';

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
    canActivate: [authGuardMatch],

  },
  {
    path: 'userAssigned/:id',
    component: UserAssignedComponent,
    canActivate: [authGuardMatch],
  },
  {
    path: 'userProgress/:id',
    component: UserProgressComponent,
    canActivate: [authGuardMatch],
  },
  {
    path: 'userFinished/:id',
    component: UserFinishedComponent,
    canActivate: [authGuardMatch],
  },
  {
    path: 'adminList',
    component: AdminListComponent,
    canActivate: [authGuardMatch],
  },
  {
    path: 'adminListUser',
    component: AdminListUserComponent,
    canActivate: [authGuardMatch],
  },
  {
    path: 'userCreateTarea',
    component: UserCreateTareaComponent,
    canActivate: [authGuardMatch],
  },
  {
    path: 'adminCreateUser',
    component: AdminCreateUserComponent,
    canActivate: [authGuardMatch],
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];
