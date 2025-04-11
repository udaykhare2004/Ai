// Import the functions you need from the SDKs you need
import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCSk3e0aPoQTVIut8N-V0l-RPh2E-w50uk",
  authDomain: "prepwise-f5cb0.firebaseapp.com",
  projectId: "prepwise-f5cb0",
  storageBucket: "prepwise-f5cb0.firebasestorage.app",
  messagingSenderId: "12449918863",
  appId: "1:12449918863:web:b1b65cf7f509e0f08625fa",
  measurementId: "G-284Z6YL0ML"
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
// const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const db = getFirestore(app);
