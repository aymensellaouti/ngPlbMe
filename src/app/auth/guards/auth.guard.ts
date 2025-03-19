import { CanActivateFn } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  // Il faudra dir si oui ou non on a le droit d'accéder à la route
  return true;
};
