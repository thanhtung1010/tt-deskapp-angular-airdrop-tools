import { Routes } from '@angular/router';
import { ROUTE } from '@enums';
import { AppComponent } from './app.component';
import { authActiveGuard } from '@guards';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: ROUTE.HOME,
        loadComponent: () => import('./pages/home/home.component').then(c => c.HomeComponent),
      },
      {
        path: ROUTE.AUTH,
        canActivate: [authActiveGuard],
        loadComponent: () => import('./pages/auth/auth.component').then(c => c.AuthComponent),
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: ROUTE.HOME,
      },
    ],
  },
];
