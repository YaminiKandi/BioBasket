// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from 'firebase/firestore'
// import 'firebase/storage';

const firebaseConfig = {
  apiKey: "AIzaSyBodUgrkV95TYCsdyDoWxaSlPkQHDrXNMg",
  authDomain: "yk-biobasket.firebaseapp.com",
  projectId: "yk-biobasket",
  storageBucket: "yk-biobasket.appspot.com",
  messagingSenderId: "623547819659",
  appId: "1:623547819659:web:d5b66d8a08bc6f2f95968e",
  measurementId: "G-TPPENVEE1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const storage = app.storage()
export const auth = getAuth(app)
export const db = getFirestore(app)
export default app