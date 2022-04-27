import {getAuth, GoogleAuthProvider, signInWithPopup} from 'firebase/auth'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAiBbF8i22Cwdq2vUsTxgp2ZIPDrKqMj54",
  authDomain: "project-cp-d2898.firebaseapp.com",
  projectId: "project-cp-d2898",
  storageBucket: "project-cp-d2898.appspot.com",
  messagingSenderId: "696869202164",
  appId: "1:696869202164:web:557835a266942632dad6a1"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)