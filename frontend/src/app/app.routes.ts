
// app.routes.ts
/*import { Routes } from '@angular/router';
import {AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent)
  },

  {
    path: 'dashboard',
    canActivate: [AuthGuard],
    loadComponent: () => import('./pages/dashboard.component').then(m => m.DashboardComponent)
  },
  { path: '**', redirectTo: 'login' }

];*/

import { Routes } from '@angular/router';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent)
  },
  {
    path: '',
    canActivate: [AuthGuard],
    loadComponent: () => import('../layout/layout.component').then(m => m.LayoutComponent),
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./pages/dashboard.component').then(m => m.DashboardComponent)
      },
      // Aquí puedes agregar más rutas para otras páginas
    ]
  },
  { path: '**', redirectTo: 'login' }
];

