// Import the functions you need from the SDKs you need
import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAnalytics, isSupported } from "firebase/analytics";

// Check if we're in build mode or if environment variables are missing
const isBuilding = process.env.NODE_ENV === 'production' && !process.env.NEXT_PUBLIC_FIREBASE_API_KEY;

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY || "AIzaSyCtficFfmQyePRXfbda6OhSautmxwKKRac",
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN || "future-capital-91977.firebaseapp.com",
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID || "future-capital-91977",
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET || "future-capital-91977.firebasestorage.app",
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID || "505793906042",
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID || "1:505793906042:web:cbf26a1ef1b21ed80a02c3",
  measurementId: process.env.NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID || "G-1C00HG24B0"
};

// Log configuration for debugging (remove in production)
if (typeof window !== 'undefined' && !isBuilding) {
  console.log('Firebase Config:', {
    apiKey: firebaseConfig.apiKey ? 'Set' : 'Not Set',
    authDomain: firebaseConfig.authDomain,
    projectId: firebaseConfig.projectId
  });
}

// Initialize Firebase (avoid re-initializing in development)
let app: any = null;
let auth: any = null;
let db: any = null;
let storage: any = null;
let analytics: any = null;

// Only initialize Firebase in browser environment or when not building
if (typeof window !== 'undefined' || !isBuilding) {
  try {
    app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
    
    // Initialize Firebase services
    auth = getAuth(app);
    db = getFirestore(app);
    storage = getStorage(app);
    
    // Initialize Analytics (only in browser and if supported)
    analytics = typeof window !== 'undefined' ? isSupported().then(yes => yes ? getAnalytics(app) : null) : null;
  } catch (error) {
    console.warn('Firebase initialization skipped during build:', error);
  }
}

// Export Firebase services with fallbacks for build time
export { auth, db, storage, analytics };
export default app; 