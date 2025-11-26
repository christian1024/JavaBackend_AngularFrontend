
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../auth/auth.service';

@Component({
  standalone: true,
  selector: 'app-dashboard',
  imports: [CommonModule],
  template: `
    <div class="p-6">
      <div class="flex justify-between items-center mb-4">
        <h1 class="text-2xl font-bold">Dashboard</h1>
        <button class="bg-gray-800 text-white px-3 py-1 rounded" (click)="logout()">Salir</button>
      </div>

      <div class="bg-white shadow rounded p-4">
        <p>Contenido protegido. Si ves esto, tu JWT está funcionando ✅.</p>
      </div>
    </div>
  `
})
export class DashboardComponent {
  constructor(private auth: AuthService) {}

  logout() {
    this.auth.logout();
    location.href = '/login';
  }
}
