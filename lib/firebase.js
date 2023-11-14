// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {
  FIREBASE_APP_API_KEY,
  FIREBASE_APP_APP_ID,
  FIREBASE_APP_AUTH_DOMAIN,
  FIREBASE_APP_PROJECT_ID,
  FIREBASE_APP_STORAGE_BUCKET,
  FIREBASE_APP_MESSAGING_SENDER_ID,
} from "@env";
import { initializeAuth, getReactNativePersistence } from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web apps Firebase configuration

const firebaseConfig = {
  apiKey: FIREBASE_APP_API_KEY,
  authDomain: FIREBASE_APP_AUTH_DOMAIN,
  projectId: FIREBASE_APP_PROJECT_ID,
  storageBucket: FIREBASE_APP_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_APP_MESSAGING_SENDER_ID,
  appId: FIREBASE_APP_APP_ID,
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

const db = getFirestore(app);

export { auth, db };
