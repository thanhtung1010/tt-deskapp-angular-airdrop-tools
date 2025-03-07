import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, TransferState } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAngularSvgIcon, SvgLoader } from 'angular-svg-icon';
import { routes } from './app.routes';
import { provideFirebaseService } from 'common-service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HTTPLoaderFactory } from './loader';
import { provideTranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from '~environments/environment';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideHttpClient(),
    provideAngularSvgIcon(),
    provideFirebaseService(environment.firebaseConfig),
    provideTranslateService({
      defaultLanguage: environment.defaultLang,
      loader: {
        provide: TranslateLoader,
        useFactory: HTTPLoaderFactory,
        deps: [HttpClient],
      },
    }),
    importProvidersFrom([]),
  ],
};
