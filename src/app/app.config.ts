import { ApplicationConfig, provideBrowserGlobalErrorListeners, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes), provideFirebaseApp(() => initializeApp({ projectId: "newpro-d1fd3", appId: "1:724263853584:web:abb4503a507ad465f8b495", storageBucket: "newpro-d1fd3.firebasestorage.app", apiKey: "AIzaSyABTZqNuHrGPLnvqy9AA1hh0OMX2oMQBf4", authDomain: "newpro-d1fd3.firebaseapp.com", messagingSenderId: "724263853584" })), provideAuth(() => getAuth()), provideFirebaseApp(() => initializeApp({ projectId: "newpro-d1fd3", appId: "1:724263853584:web:abb4503a507ad465f8b495", storageBucket: "newpro-d1fd3.firebasestorage.app", apiKey: "AIzaSyABTZqNuHrGPLnvqy9AA1hh0OMX2oMQBf4", authDomain: "newpro-d1fd3.firebaseapp.com", messagingSenderId: "724263853584"})), provideFirestore(() => getFirestore())
  ]
};
