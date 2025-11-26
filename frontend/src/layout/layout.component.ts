import { Component } from '@angular/core';

import {HeaderComponent} from '../header/header.component';
import {SidebarComponent} from '../sidebar/sidebar.component';
import {DashboardComponent} from '../dashboard/dashboard.component';

@Component({
  selector: 'app-layout',
  imports: [
    HeaderComponent,
    SidebarComponent,
    DashboardComponent
  ],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css',
})
export class LayoutComponent {

}
