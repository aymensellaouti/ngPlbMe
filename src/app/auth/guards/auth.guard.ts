import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { APP_ROUTES } from 'src/app/config/app-routes.config';

export const authGuard: CanActivateFn = (route, state) => {
  // Il faudra dir si oui ou non on a le droit d'accéder à la route
  const authService = inject(AuthService);
  const router = inject(Router);
  if (!authService.isAuthenticated()) {
    router.navigate([APP_ROUTES.login]);
    return false;
  }
  return true;
};
