
import { Routes } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { AuthGuard } from './auth/auth.guard';
import {PersonalComponent} from './personal/PersonalListCreate/personal';
import {PersonalUpdate} from './personal/personal-update/personal-update';

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
        path: 'personal',
        loadComponent: () => import('./personal/PersonalListCreate/personal').then(m => m.PersonalComponent)
      },
      /*{
        path: 'personal/editar/:id',
        loadComponent: () => import('./personal/PersonalUpdateCreate/personal').then(m => m.PersonalUpdate)
      }*/
    ]
  },
  {
    path: 'login',
    loadComponent: () => import('./auth/login.component').then(m => m.LoginComponent)
  },
  { path: '**', redirectTo: 'login' } // rutas no encontradas → login
];
