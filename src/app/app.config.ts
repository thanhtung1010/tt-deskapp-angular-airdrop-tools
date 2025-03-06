import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { FirebaseModule } from 'common-service';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    importProvidersFrom([
      FirebaseModule.forRoot({
        apiKey: "AIzaSyCpRMBZYgwrigZH1hn2o8C7wxYbDFioSdM",
        authDomain: "genealogy-564ae.firebaseapp.com",
        projectId: "genealogy-564ae",
        storageBucket: "genealogy-564ae.firebasestorage.app",
        messagingSenderId: "698023068308",
        appId: "1:698023068308:web:f28096240049387f046a81",
        measurementId: "G-16WV9QSS7Y"
      })
    ]),
  ],
};
