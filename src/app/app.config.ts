import { APP_INITIALIZER, ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './core/interceptors/auth.interceptor';
import { loaderInterceptor } from './core/interceptors/loader.interceptor';
import { AppConfigs } from './core/models/app.configs';
import { provideQuillConfig } from 'ngx-quill';
import { QuillToolBarItems } from './core/models/const';
import { MAT_FORM_FIELD_DEFAULT_OPTIONS } from '@angular/material/form-field';
export function initializeApp(appConfig: AppConfigs) {
  return () => appConfig.load();
}
export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }), 
    provideRouter(routes), 
    provideAnimationsAsync(),
    provideHttpClient(
      withFetch(),
      withInterceptors([
        authInterceptor,
        loaderInterceptor
      ])
    ),
    AppConfigs,
    {
      provide: APP_INITIALIZER,
      useFactory: initializeApp,
      deps: [AppConfigs],
      multi: true,
    },
    provideQuillConfig({
      modules: {
        toolbar: QuillToolBarItems
      }
    }),
    {provide: MAT_FORM_FIELD_DEFAULT_OPTIONS, useValue: {appearance: 'outline'}}
  ]
};
