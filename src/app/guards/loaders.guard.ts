import { CanActivateFn } from '@angular/router';

export const loadersGuard: CanActivateFn = (route, state) => {
  return false;
};
