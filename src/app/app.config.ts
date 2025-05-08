import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideIonicAngular } from '@ionic/angular/standalone';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { getAuth, provideAuth } from '@angular/fire/auth';
import { getFirestore, provideFirestore } from '@angular/fire/firestore';
import { getStorage, provideStorage } from '@angular/fire/storage';

export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes), provideIonicAngular({}), provideFirebaseApp(() => initializeApp({ projectId: "ecomore-f30a5", appId: "1:509475421179:web:41e3b6710383882cf5a95e", storageBucket: "ecomore-f30a5.firebasestorage.app", apiKey: "AIzaSyD6D10LY3i9DUw7EYaHIFk5Q4dAD4A01CI", authDomain: "ecomore-f30a5.firebaseapp.com", messagingSenderId: "509475421179" })),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore()),
    provideStorage(() => getStorage())]
};
