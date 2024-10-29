import { CanActivateFn } from '@angular/router';

export const userAuthGuard: CanActivateFn = (route, state) => {
  let user = JSON.parse(localStorage.getItem('loginuser')!);
  if (!user) {
    return false;
  } else {
    return true;
  }
};
