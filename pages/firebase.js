
import { initializeApp } from "firebase/app";
import {getAuth}from 'firebase/auth'
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyARBWZc9mwDmS9nk4sfBsXz2SWcoUrNtnw",
  authDomain: "pokemon-e102e.firebaseapp.com",
  projectId: "pokemon-e102e",
  storageBucket: "pokemon-e102e.appspot.com",
  messagingSenderId: "964894551000",
  appId: "1:964894551000:web:8267065ac4de9989eea0ad"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth=getAuth();