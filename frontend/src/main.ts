
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app.routes';
import { jwtInterceptor } from './app/auth/jwt.interceptor';

import { provideIcons } from '@ng-icons/core';
import {
  heroHome,
  heroShoppingCart,
  heroChartBar,
  heroCog6Tooth,
  heroUsers,
  heroChevronDown,
} from '@ng-icons/heroicons/outline';

bootstrapApplication(AppComponent, {
  providers: [
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideRouter(appRoutes),

    // ✅ Añade los íconos aquí
    provideIcons({
      heroHome,
      heroShoppingCart,
      heroChartBar,
      heroCog6Tooth,
      heroUsers,
      heroChevronDown,
    }),
  ]
}).catch(err => console.error(err));
