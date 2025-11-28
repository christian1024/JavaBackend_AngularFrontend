
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth/auth.guard';

export const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // 🔑 Empieza en login
  {
    path: '',
    component: LayoutComponent,
    canActivate: [AuthGuard], // 🔒 Protege el layout
    children: [
      {
        path: 'dashboard',
        loadComponent: () => import('./dashboard/dashboard.component').then(m => m.DashboardComponent)
      },
      {
        path: 'personal/personal',
        loadComponent: () => import('./personal/personal').then(m => m.PersonalComponent)
      }
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent)
  },
  { path: '**', redirectTo: 'login' } // rutas no encontradas → login
];
