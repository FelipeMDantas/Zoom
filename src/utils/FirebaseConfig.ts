// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAW1MnZC0UT9NOcYAGP7mCHh-s1TCSTzwE",
  authDomain: "zoom-1268a.firebaseapp.com",
  projectId: "zoom-1268a",
  storageBucket: "zoom-1268a.appspot.com",
  messagingSenderId: "1000953942529",
  appId: "1:1000953942529:web:259aed351b2616ccdae600",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);
export const userRef = collection(firebaseDB, "users");
