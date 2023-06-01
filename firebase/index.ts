import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyBKXsk5Ohnva-W5uIbFvbqjbp5zpwPM3n8",
  authDomain: "coinmatics-dfa39.firebaseapp.com",
  projectId: "coinmatics-dfa39",
  storageBucket: "coinmatics-dfa39.appspot.com",
  messagingSenderId: "994227790904",
  appId: "1:994227790904:web:144afed293985209efb2cd",
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);