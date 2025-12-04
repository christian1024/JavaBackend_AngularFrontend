
import { Component } from '@angular/core';
import { SidebarComponent } from '../sidebar/sidebar.component';
import { HeaderComponent } from '../header/header.component';
import { RouterModule, Router, NavigationEnd } from '@angular/router';
import { CommonModule } from '@angular/common';
import { filter } from 'rxjs/operators';
import { AuthService } from '../auth/auth.service';

export interface MenuItem {
  label: string;
  path?: string;
  icon?: string;
  children?: MenuItem[];
  open?: boolean;
}

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SidebarComponent, HeaderComponent, RouterModule, CommonModule],
  templateUrl: './layout.component.html',
})
export class LayoutComponent {
  sidebarOpen = true;
  pageTitle = 'Dashboard';

  menu: MenuItem[] = [
    { label: 'Dashboard', path: '/dashboard', icon: 'heroHome' },
    {
      label: 'Personal', icon: 'heroUsers', children: [
        { label: 'Empleados',path: '/personal'},

      ]
    },
  ];

  constructor(private router: Router, private authService: AuthService) {
    this.router.events.pipe(filter(e => e instanceof NavigationEnd))
      .subscribe(() => {
        this.pageTitle = this.findByPath(this.menu, this.router.url)?.label ?? 'Dashboard';
      });
  }

  toggleDark() {
    document.documentElement.classList.toggle('dark');
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }

  private findByPath(items: MenuItem[], path: string): MenuItem | undefined {
    for (const it of items) {
      if (it.path === path) return it;
      if (it.children) {
        const child = this.findByPath(it.children, path);
        if (child) return child;
      }
    }
    return undefined;
  }
}
