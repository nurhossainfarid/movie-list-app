import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { provideToastr } from 'ngx-toastr';

import {
  provideClientHydration,
  withEventReplay,
} from '@angular/platform-browser';
import { routesConfig } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routesConfig),
    provideClientHydration(withEventReplay()),
    provideToastr(),
    { provide: BrowserAnimationsModule },
  ],
};
