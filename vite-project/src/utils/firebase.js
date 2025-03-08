 // Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth} from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDa7w9Mk8QfPLB0INkC5VJjV0kcY9GVZmA",
  authDomain: "netflixgpt-42d7e.firebaseapp.com",
  projectId: "netflixgpt-42d7e",
  storageBucket: "netflixgpt-42d7e.firebasestorage.app",
  messagingSenderId: "66196151864",
  appId: "1:66196151864:web:af27b6f7cfbacde32010cd",
  measurementId: "G-YTMXQYX68H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
