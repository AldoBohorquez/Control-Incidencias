import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../auth/AuthService.service';
import { inject } from '@angular/core';

export const permisionGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if(authService.isAth(true))
  {
    return true;
  }
  else
  {
    router.navigateByUrl('login');
    return false;
  }
};
