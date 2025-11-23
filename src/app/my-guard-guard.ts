import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { Authservice } from './authservice';

export const myGuardGuard: CanActivateFn = (route, state) => {
  const auth = inject(Authservice);
  const router = inject(Router);
  return auth.getCurrentUser().then(user => {
    if (!user) {
      router.navigate(['/Sign-in']);
      return false;
    }
  
    return true;
  });
}