
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import { provideHttpClient, withInterceptors } from '@angular/common/http';


import { provideIcons } from '@ng-icons/core';
import {
  heroHome,
  heroShoppingCart,
  heroChartBar,
  heroCog6Tooth,
} from '@ng-icons/heroicons/outline';


import { jwtInterceptor } from './auth/jwt.interceptor';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),
    provideHttpClient(withInterceptors([jwtInterceptor])),
    provideIcons({
      heroHome,
      heroShoppingCart,
      heroChartBar,
      heroCog6Tooth,
    }),
  ],
};

