import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection, TransferState } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideAppConfig, provideFirebaseService } from 'common-service';
import { HttpClient, provideHttpClient } from '@angular/common/http';
import { HTTPLoaderFactory } from './loader';
import { provideTranslateService, TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { environment } from '~environments/environment';
import { vi_VN, provideNzI18n } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import vi from '@angular/common/locales/vi';
import { FormsModule } from '@angular/forms';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

registerLocaleData(vi);

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideAppConfig(environment),
    provideHttpClient(),
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

    // #region ng-zoro-antd
    provideNzI18n(vi_VN),
    importProvidersFrom(FormsModule),
    provideAnimationsAsync(),
  ],
};
