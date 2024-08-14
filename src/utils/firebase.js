import { getAuth } from "firebase/auth";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCH-DGLIRr-vzZjdnJzdnTuBFGKrIIVcsk",
  authDomain: "netflixgpt-be1e9.firebaseapp.com",
  projectId: "netflixgpt-be1e9",
  storageBucket: "netflixgpt-be1e9.appspot.com",
  messagingSenderId: "503272063249",
  appId: "1:503272063249:web:ca7fcfb8e11cda3bb64cb0",
  measurementId: "G-C22RKTY5FF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
