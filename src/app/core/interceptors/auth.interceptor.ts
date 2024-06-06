import { HttpInterceptorFn } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  var token = inject(AuthService).getAuthToken();
  req = req.clone({
    setHeaders: { Authorization: "bearer " + token }
  });
  return next(req);
};
