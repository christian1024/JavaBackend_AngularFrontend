
// app.config.ts
import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app.routes';

import { provideIcons } from '@ng-icons/core';
import {
  heroHome,
  heroShoppingCart,
  heroChartBar,
  heroCog6Tooth,

} from '@ng-icons/heroicons/outline';

export const appConfig: ApplicationConfig = {
  providers: [
    provideRouter(appRoutes),

    // 🔑 Registro global de íconos
    provideIcons({
      heroHome,
      heroShoppingCart,
      heroChartBar,
      heroCog6Tooth,
    }),
  ],
};
