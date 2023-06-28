import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyC7Sai7drHPXvsI0KNVr5rjFMgGhig7dTo",
  authDomain: "realtimechat-15814.firebaseapp.com",
  projectId: "realtimechat-15814",
  storageBucket: "realtimechat-15814.appspot.com",
  messagingSenderId: "767459022649",
  appId: "1:767459022649:web:1ed5a14af1abf2b253bae8"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)