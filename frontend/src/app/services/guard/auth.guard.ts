import { inject } from '@angular/core';
import { CanActivateFn, Route, Router, UrlSegment } from '@angular/router';
import { AuthService } from '../auth/AuthService.service';

export const authGuard: CanActivateFn = (route, state) => {
  const authService = inject(AuthService);
  const router = inject(Router);
  if (authService.isAuth()) {
    return false;
  }
  else
  {
    const urlTree = router.createUrlTree(['/login']);
    return urlTree;
  }
};

export const authGuardMatch = (route:Route,segments:UrlSegment[])=>
  {
    const authService = inject(AuthService);
    return authService.isAuth();
  }