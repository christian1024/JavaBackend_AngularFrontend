
import { Routes } from '@angular/router';
export const appRoutes: Routes = [
  {
    path: '',
    component: LayoutComponent, // ✅ Layout fijo
    children: [
      { path: 'dashboard', loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent) },
      {
        path: 'personal/personal',
        loadComponent: () => import('./personal/personal').then(m => m.PersonalComponent)
      },

      { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
    ]
  },
  { path: 'login', loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent) }
];

import { LayoutComponent } from './layout/layout.component';
