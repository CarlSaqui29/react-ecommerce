// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA4LK_NRPmxiBWZs7uyzJ6qPMoH0pX03YQ",
  authDomain: "react-ecommerce-541d7.firebaseapp.com",
  projectId: "react-ecommerce-541d7",
  storageBucket: "react-ecommerce-541d7.appspot.com",
  messagingSenderId: "360193494610",
  appId: "1:360193494610:web:462ba9713d4c820a7dd98b"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithGooglePopup(auth, provider);