
import { Component, EventEmitter, Input, Output, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { NgIconsModule } from '@ng-icons/core';

// Usa la misma interfaz del layout
export interface MenuItem {
  label: string;
  path?: string;
  icon?: string;
  children?: MenuItem[];
  open?: boolean;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterModule, NgIconsModule],
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit, OnChanges {
  @Input() menu: MenuItem[] = [];
  @Input() sidebarOpen = true;
  @Output() sidebarToggle = new EventEmitter<void>();

  constructor(private router: Router) {}

  ngOnInit() {
    // Abre el grupo que contenga la ruta actual
    this.openGroupForUrl(this.router.url);

    // Mantén el estado en cambios de ruta
    this.router.events
      .pipe(filter(e => e instanceof NavigationEnd))
      .subscribe((e) => {
        const url = (e as NavigationEnd).urlAfterRedirects;
        this.openGroupForUrl(url);
      });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['sidebarOpen'] && !this.sidebarOpen) {
      // Si se colapsa el sidebar, cierra los submenús
      this.menu.forEach(it => it.open = false);
    }
  }

  toggleGroup(item: MenuItem) {
    // Al hacer clic en el grupo, alterna su apertura
    item.open = !item.open;
  }

  isActive(path?: string): boolean {
    if (!path) return false;
    // Segundo parámetro 'false' -> match "startsWith" (no exacta)
    return this.router.isActive(path, false);
  }

  hasActiveChild(item: MenuItem): boolean {
    if (!item.children) return false;
    return item.children.some(c => this.isActive(c.path));
  }

  private openGroupForUrl(url: string) {
    this.menu.forEach(group => {
      if (group.children?.some(c => c.path && url.startsWith(c.path))) {
        group.open = true;
      }
    });
  }
}
