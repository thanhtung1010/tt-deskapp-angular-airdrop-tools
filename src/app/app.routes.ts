import { Routes } from '@angular/router';
import { ROUTE } from '@enums';

export const routes: Routes = [
  {
    path: ROUTE.HOME,
    loadChildren: () => import('./pages/home/home.component').then(c => c.HomeComponent),
  },
  {
    path: ROUTE.AUTH,
    loadChildren: () => import('./pages/auth/auth.component').then(c => c.AuthComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: ROUTE.HOME,
  },
];
