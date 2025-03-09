import { inject } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
  UrlTree
} from '@angular/router';
import { catchError, Observable, of, Subscriber } from "rxjs";
import { FirebaseService } from 'common-service';
import { ROUTE } from '@enums';

export const authActiveGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot
):
  | Observable<boolean | UrlTree>
  | Promise<boolean | UrlTree>
  | boolean
  | UrlTree => {
  const firebaseService = inject(FirebaseService);
  const router = inject(Router);

  return new Observable((subs: Subscriber<boolean>) => {
      firebaseService.authStateChanged()
      .pipe(
        catchError(error => {
          console.error(error);
          return of(null);
        })
      )
      .subscribe({
        next: resp => {
          const loged = !!resp;
          if (!loged) {
            subs.next(true);
          } else {
            router.navigate([ROUTE.HOME]);
            subs.next(false);
          }
          subs.complete();
        },
      });
  });
};
