import {
  ApplicationConfig,
  provideBrowserGlobalErrorListeners,
  provideZonelessChangeDetection,
} from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Mode "zoneless" : Angular ne surveille plus le code via Zone.js (qui patch
    // les timers, promesses, événements DOM, etc. pour savoir quand redessiner).
    // La détection de changements est déclenchée explicitement par les Signals :
    // plus léger, plus prévisible, sans dépendance implicite à Zone.js.
    provideZonelessChangeDetection(),
    provideRouter(routes),
  ],
};
