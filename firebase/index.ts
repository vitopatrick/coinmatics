import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// these are the firebase config files
const firebaseConfig = {
  apiKey: "AIzaSyD6_yhVa30ldJ3CB8pVYGR9Lb15E-d1wcU",
  authDomain: "coinmatics-48e30.firebaseapp.com",
  projectId: "coinmatics-48e30",
  storageBucket: "coinmatics-48e30.appspot.com",
  messagingSenderId: "913059991061",
  appId: "1:913059991061:web:5e85ce61c7e54a3bc3c81c",
};



const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const store = getFirestore(app);
export const bucket = getStorage(app);