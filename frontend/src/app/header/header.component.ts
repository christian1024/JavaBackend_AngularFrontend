
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './header.component.html',
})
export class HeaderComponent {
  @Input() pageTitle = '';
  @Output() toggleSidebar = new EventEmitter<void>();
  @Output() toggleDark = new EventEmitter<void>();
  @Output() logout = new EventEmitter<void>();
}
