import { HttpEventType, HttpInterceptorFn } from '@angular/common/http';
import { SpinnerService } from '../services/spinner.service';
import { inject } from '@angular/core';
import { catchError, tap, throwError } from 'rxjs';

export const loaderInterceptor: HttpInterceptorFn = (req, next) => {
  const spinner = inject(SpinnerService);
  spinner.show();

  return next(req).pipe(tap(event => {
    if (event.type === HttpEventType.Response) {
      spinner.hide();
      console.log(req.url, 'returned a response with status', event.status);
    }
  }),
    catchError(error => {
      spinner.hide();
      return throwError(() => error);
    }));
};
