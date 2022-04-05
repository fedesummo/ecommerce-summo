// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC4D1pHiwgQgabefuzNI2lSZm7OlatBg4",
  authDomain: "techcommerce-ee794.firebaseapp.com",
  projectId: "techcommerce-ee794",
  storageBucket: "techcommerce-ee794.appspot.com",
  messagingSenderId: "493849567682",
  appId: "1:493849567682:web:c370e0dd27f6794e49365b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const getFirebase = () => app