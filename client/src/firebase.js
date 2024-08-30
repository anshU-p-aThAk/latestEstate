// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "estate-mern-6ba99.firebaseapp.com",
  projectId: "estate-mern-6ba99",
  storageBucket: "estate-mern-6ba99.appspot.com",
  messagingSenderId: "376544518080",
  appId: "1:376544518080:web:c9967b798238961b42b225",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
