import { initializeApp, getApp, getApps } from "firebase/app";
import { firebaseApiKey } from "@env";
import {
  initializeAuth,
  getAuth,
  getReactNativePersistence,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import ReactNativeAsyncStorage from "@react-native-async-storage/async-storage";

const firebaseConfig = {
  apiKey: firebaseApiKey,
  authDomain: "meals-ordering-a817b.firebaseapp.com",
  projectId: "meals-ordering-a817b",
  storageBucket: "meals-ordering-a817b.appspot.com",
  messagingSenderId: "415090686951",
  appId: "1:415090686951:web:d2140f41714a3719b85b42",
};

const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage),
});

export {
  app,
  auth,
  getApp,
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
};
